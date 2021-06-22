import type { InsertOneFn } from './functions/insert-one-function.protocol'

export interface InsertOneAdapter<
  O = undefined,
  Collection extends string = string,
> {
  insertOne: InsertOneFn<O, Collection>
}
