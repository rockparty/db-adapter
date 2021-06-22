import type { CombineArgsAndOptions } from './helpers'

interface InsertOneByIdArgs<
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> {
  in: Collection
  as: T
  idKey: IdKey
}

export type InsertOneByIdFnArgs<
  O = undefined,
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> = CombineArgsAndOptions<InsertOneByIdArgs<T, IdKey, Collection>, O>

export type InsertOneByIdFn<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> = <T extends Base>(
  args: InsertOneByIdFnArgs<O, T, IdKey, Collection>,
) => Promise<T>
