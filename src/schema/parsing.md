# PARSING FROM XII TO LIVE 5eTools

## BACKGROUND
background -> X (remove)

## LEVEL
level[*] -> (int) level

## SIZE
size (array) -> (string) size
size (array).size -> (string) size
size (array).condition -> X (remove)

## TYPE
type (array) => (string) type
type.type (array) -> (string) type.type

## HP
hp[rolls] -> (string) hp.special

## SAVE
save.X (proficiency math) -> (string) save.X
save.X (proficient boolean = true) -> (string) save.X
save.X (proficient boolean = false) -> X (remove)

## SKILL
skill.X (proficiency math) -> (string) skill.X
skill.X (proficient boolean = true) -> (string) skill.X
skill.X (proficient boolean = false) -> X (remove)

## SENSES
senses.X (valueObject) -> (string) senses.X

## PASSIVE
skill.perception + 10 -> (stirng) passive

### Require field
Passive is a required field, so I will have to inject that on the final parsing

## PROFICIENCIES/FEAT/FEATURE
proficiencies -> turn it into trait
feat -> turn it into trait
feature -> turn it into trait

## _ROLLS
_rolls -> X (remove)

## _HP
_hp -> X (remove)

## _CONDITIONS
_conditions -> X (remove)

## _COLOR
_color -> X (remove)