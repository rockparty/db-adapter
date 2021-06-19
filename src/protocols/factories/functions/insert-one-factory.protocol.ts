import type { InsertOneAdapter } from '@/protocols/adapters/insert-one-adapter.protocol'

export interface InsertOneFnArgs<T> {
  in: string
  as: T
}

export type InsertOneFn = <T>(args: InsertOneFnArgs<T>) => Promise<T>

export interface InsertOneFactoryArgs {
  db: InsertOneAdapter
}

export type InsertOneFactory = <T>(args: InsertOneFnArgs<T>) => Promise<T>
