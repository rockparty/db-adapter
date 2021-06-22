import type { CombineArgsAndOptions } from './helpers'

interface GetAllArgs<Collection extends string = string> {
  from: Collection
}

export type GetAllFnArgs<
  O = undefined,
  Collection extends string = string,
> = CombineArgsAndOptions<GetAllArgs<Collection>, O>

export type GetAllFn<O = undefined, Collection extends string = string> = <T>(
  args: GetAllFnArgs<O, Collection>,
) => Promise<T[]>
