import type { UpdateOneFn } from './functions/update-one-function.protocol'

export interface UpdateOneAdapter<
  O = undefined,
  Collection extends string = string,
> {
  updateOne: UpdateOneFn<O, Collection>
}
