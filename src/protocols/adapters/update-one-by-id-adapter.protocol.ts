import type { UpdateOneByIdFn } from './functions/update-one-by-id-function.protocol'

export interface UpdateOneByIdAdapter<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> {
  updateOneById: UpdateOneByIdFn<O, Base, IdKey, Collection>
}
