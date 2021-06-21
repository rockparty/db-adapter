import type { UpdateOneFn } from './functions/update-one-function.protocol'

export interface UpdateOneAdapter<O = undefined> {
  updateOne: UpdateOneFn<O>
}
