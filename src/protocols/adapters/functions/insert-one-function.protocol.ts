import type { CombineArgsAndOptions } from './helpers'

interface InsertOneArgs<T> {
  in: string
  as: T
}

export type InsertOneFnArgs<T, O = undefined> = CombineArgsAndOptions<
  InsertOneArgs<T>,
  O
>

export type InsertOneFn<O = undefined> = <T>(
  args: InsertOneFnArgs<T, O>,
) => Promise<T>
