import type { CombineArgsAndOptions } from './helpers'

interface GetOneByIdArgs<
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> {
  from: Collection
  id: T[IdKey]
}

export type GetOneByIdFnArgs<
  O = undefined,
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> = CombineArgsAndOptions<GetOneByIdArgs<T, IdKey, Collection>, O>

export type GetOneByIdFn<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> = <T extends Base>(
  args: GetOneByIdFnArgs<O, T, IdKey, Collection>,
) => Promise<T | null>
