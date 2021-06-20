import type { InsertOneAdapter } from '../adapters/insert-one-adapter.protocol'
import type { InsertOneFnArgs } from '../adapters/functions/insert-one-function.protocol'

export interface InsertOneFactoryArgs {
  db: InsertOneAdapter
}

export type InsertOneFactory = <T>(args: InsertOneFnArgs<T>) => Promise<T>
