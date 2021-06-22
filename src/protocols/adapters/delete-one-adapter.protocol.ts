import type { DeleteOneFn } from './functions/delete-one-function.protocol'

export interface DeleteOneAdapter<
  O = undefined,
  Collection extends string = string,
> {
  deleteOne: DeleteOneFn<O, Collection>
}
