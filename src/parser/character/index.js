import _ from 'lodash'
import character from '../../domain/character'

export function bestiary(characters) {
  const _characters = _.cloneDeep([characters].flat(1)).filter((c) => !!c)

  return _characters.map((char) => {
    const mon = char
    debugger

    delete mon.background

    mon.level = character.creatureLevel(mon, undefined)

    // if (!_.isArray(mon.size)) {
    // } else {
    // }

    return mon
  })
}

export default {
  bestiary,
}
