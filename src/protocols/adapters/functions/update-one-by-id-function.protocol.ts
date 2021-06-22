import type { CombineArgsAndOptions } from './helpers'

interface UpdateOneByIdArgs<
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> {
  from: Collection
  id: T[IdKey]
  as: Partial<T>
}

export type UpdateOneByIdFnArgs<
  O = undefined,
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> = CombineArgsAndOptions<UpdateOneByIdArgs<T, IdKey, Collection>, O>

export type UpdateOneByIdFn<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> = <T extends Base = any>(
  args: UpdateOneByIdFnArgs<O, T, IdKey, Collection>,
) => Promise<T | null>
