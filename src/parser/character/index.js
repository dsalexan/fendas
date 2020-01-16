import _ from 'lodash'
import character, { characterSavingThrowBonus, characterSkillBonus } from '../../domain/character'
import validator from '../../schema/bestiary'
import { sum } from '../../utils/value'
import { ABILITIES, SKILLS } from '../../domain/system'

function printValidation(char, validation) {
  return validation.map((v) =>
    console.log(`${char.name} -> <${v.dataPath.replace('.monster[0]', '')}> ${v.message}`, v.params, v.schemaPath),
  )
}

function ignore(validation) {
  if (!validation) return false
  const n = validation.filter((v) => {
    if (v.dataPath === '.monster[0].fluff') {
      if (v.schemaPath === '#/anyOf/0/properties/fluff/oneOf' || v.schemaPath === '#/anyOf/1/properties/fluff/oneOf') {
        if (_.isEqual(v.params, { passingSchemas: [0, 1] })) {
          return false
        }
      }
    }
    return true
  })

  return n.length <= 1 ? false : n
}

export function bestiary(characters) {
  const _characters = _.cloneDeep([characters].flat(1)).filter((c) => !!c)

  return _characters
    .map((char) => {
      let valid = validator.xii.validate('bestiary.json', {
        monster: [char],
      })
      let validation = ignore(validator.xii.errors)

      valid = !validation

      if (!valid) {
        console.log('Invalid Character')
        printValidation(char, validation)
        console.log('')
        return undefined
      }

      const mon = char

      // BACKGROUND
      delete mon.background
      // LEVEL
      mon.level = character.creatureLevel(mon, undefined)
      // SIZE
      if (_.isArray(mon.size)) {
        if (mon.size.length === 1) {
          mon.size = mon.size[0].size || mon.size[0]
        } else {
          mon.size = 'V'
        }
      }
      // TYPE
      if (_.isArray(mon.type)) {
        mon.type = mon.type[0]
      } else if (_.isObjectLike(mon.type) && _.isArray(mon.type.type)) {
        mon.type.type = mon.type.type[0]
      }
      // HP
      if ('rolls' in mon.hp) {
        mon.hp.special = (sum(mon.hp.rolls) + mon.level * mon.con + sum(mon.hp.bonus || [])).toString()
        delete mon.hp.rolls
        delete mon.hp.bonus
      }

      // SAVE
      if (_.isObjectLike(mon.save)) {
        ABILITIES._.LIST_ABBREVIATIONS.forEach((ability) => {
          if (ability in mon.save) mon.save[ability] = characterSavingThrowBonus(char, ability, true)
        })
      }
      // SKILL
      if (_.isObjectLike(mon.skill)) {
        SKILLS._.LIST_SKILLS.forEach((skill) => {
          const ps = char.skill[skill]
          if (!ps) delete mon.skill[skill]
          else mon.skill[skill] = characterSkillBonus(char, skill, true)
        })
      }
      // SENSES
      if (_.isArray(mon.skill)) {
        mon.senses = mon.senses.map((sense) =>
          _.isString(sense)
            ? sense
            : `${sense.name} ${sense.value + (_.isInteger(sense.value) ? ' ft.' : '')} (${sense.condition})`,
        )
      }
      // PASSIVE
      mon.passive = 10 + characterSkillBonus(char, 'perception', false)
      // PROFICIENCIES/FEAT/FEATURE
      // TODO: Convert to trait
      delete mon.proficiencies
      delete mon.feat
      delete mon.feature

      // _ROLLS/_HP/_CONDITIONS/_COLOR
      delete mon._rolls
      delete mon._hp
      delete mon._conditions
      delete mon._color

      valid = validator.tools.validate('bestiary.json', {
        monster: [char],
      })
      validation = ignore(validator.tools.errors)

      valid = !validation

      if (!valid) {
        console.log('Invalid Creature (5e Tools)')
        printValidation(mon, validation)
        console.log('')
        return undefined
      }

      return mon
    })
    .filter((mon) => !!mon)
}

export default {
  bestiary,
}
