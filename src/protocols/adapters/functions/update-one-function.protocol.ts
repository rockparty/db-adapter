import type { CombineArgsAndOptions } from './helpers'

interface UpdateOneArgs<T = any, Collection extends string = string> {
  from: Collection
  by: keyof T & string
  matching: unknown
  as: Partial<T>
}

export type UpdateOneFnArgs<
  O = undefined,
  T = any,
  Collection extends string = string,
> = CombineArgsAndOptions<UpdateOneArgs<T, Collection>, O>

export type UpdateOneFn<O = undefined, Collection extends string = string> = <
  T,
>(
  args: UpdateOneFnArgs<O, T, Collection>,
) => Promise<T | null>
