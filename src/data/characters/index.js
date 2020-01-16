import { bestiary } from '../../parser/character'

// Fendas
import luke from './luke'
import helena from './helena'

import brana from './brana'
import dominus from './dominus'
import celska from './celska'
import lyra from './lyra'
import medan from './medan'
import vi from './vi'

// Whitewater
import isabel from './isabel'

const RAW = {
  luke,
  helena,
  brana,
  dominus,
  celska,
  lyra,
  medan,
  vi,
  isabel,
}

export const asBestiary = bestiary(Object.values(RAW))

export default {
  ...RAW,
  asBestiary,
}
