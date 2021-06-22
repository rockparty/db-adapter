import type { CombineArgsAndOptions } from './helpers'

interface DeleteOneByIdArgs<
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> {
  from: Collection
  id: T[IdKey]
}

export type DeleteOneByIdFnArgs<
  O = undefined,
  T = any,
  IdKey extends keyof T & string = any,
  Collection extends string = string,
> = CombineArgsAndOptions<DeleteOneByIdArgs<T, IdKey, Collection>, O>

export type DeleteOneByIdFn<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> = (args: DeleteOneByIdFnArgs<O, Base, IdKey, Collection>) => Promise<boolean>
