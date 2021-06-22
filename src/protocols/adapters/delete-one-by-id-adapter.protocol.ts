import type { DeleteOneByIdFn } from './functions/delete-one-by-id-function.protocol'

export interface DeleteOneByIdAdapter<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> {
  deleteOneById: DeleteOneByIdFn<O, Base, IdKey, Collection>
}
