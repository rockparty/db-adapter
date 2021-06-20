import type { InsertOneFn } from './functions/insert-one-function.protocol'

export interface InsertOneAdapter {
  insertOne: InsertOneFn
}
