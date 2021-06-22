import type { InsertOneByIdFn } from './functions/insert-one-by-id-function.protocol'

export interface InsertOneByIdAdapter<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> {
  insertOneById: InsertOneByIdFn<O, Base, IdKey, Collection>
}
