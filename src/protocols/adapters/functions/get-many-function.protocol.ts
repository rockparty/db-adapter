import type { CombineArgsAndOptions } from './helpers'

interface GetManyArgs<T = any, Collection extends string = string> {
  from: Collection
  by: keyof T & string
  matching: unknown
}

export type GetManyFnArgs<
  O = undefined,
  T = any,
  Collection extends string = string,
> = CombineArgsAndOptions<GetManyArgs<T, Collection>, O>

export type GetManyFn<O = undefined, Collection extends string = string> = <T>(
  args: GetManyFnArgs<O, T, Collection>,
) => Promise<T[]>
