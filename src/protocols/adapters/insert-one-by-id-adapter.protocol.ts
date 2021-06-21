import type { InsertOneByIdFn } from './functions/insert-one-by-id-function.protocol'

export interface InsertOneByIdAdapter<O = undefined> {
  insertOneById: InsertOneByIdFn<O>
}
