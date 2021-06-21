import type { CombineArgsAndOptions } from './helpers'

interface InsertOneByIdArgs<T> {
  in: string
  as: T
  idKey: keyof T & string
}

export type InsertOneByIdFnArgs<T, O = undefined> = CombineArgsAndOptions<
  InsertOneByIdArgs<T>,
  O
>

export type InsertOneByIdFn<O = undefined> = <T>(
  args: InsertOneByIdFnArgs<T, O>,
) => Promise<T>
