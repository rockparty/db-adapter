import type { CombineArgsAndOptions } from './helpers'

interface GetOneArgs<T = any, Collection extends string = string> {
  from: Collection
  by: keyof T & string
  matching: unknown
}

export type GetOneFnArgs<
  O = undefined,
  T = any,
  Collection extends string = string,
> = CombineArgsAndOptions<GetOneArgs<T, Collection>, O>

export type GetOneFn<O = undefined, Collection extends string = string> = <T>(
  args: GetOneFnArgs<O, T, Collection>,
) => Promise<T | null>
