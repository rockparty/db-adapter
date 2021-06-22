import type { CombineArgsAndOptions } from './helpers'

interface InsertOneArgs<T = any, Collection extends string = string> {
  in: Collection
  as: T
}

export type InsertOneFnArgs<
  O = undefined,
  T = any,
  Collection extends string = string,
> = CombineArgsAndOptions<InsertOneArgs<T, Collection>, O>

export type InsertOneFn<O = undefined, Collection extends string = string> = <
  T,
>(
  args: InsertOneFnArgs<O, T, Collection>,
) => Promise<T>
