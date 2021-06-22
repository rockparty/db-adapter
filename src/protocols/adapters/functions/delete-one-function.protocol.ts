import type { CombineArgsAndOptions } from './helpers'

interface DeleteOneArgs<T = any, Collection extends string = string> {
  from: Collection
  by: keyof T & string
  matching: unknown
}

export type DeleteOneFnArgs<
  O = undefined,
  T = any,
  Collection extends string = string,
> = CombineArgsAndOptions<DeleteOneArgs<T, Collection>, O>

export type DeleteOneFn<O = undefined, Collection extends string = string> = <
  T = any,
>(
  args: DeleteOneFnArgs<O, T, Collection>,
) => Promise<boolean>
