import type { CombineArgsAndOptions } from './helpers'

interface GetOneByIdArgs {
  from: string
  id: unknown
}

export type GetOneByIdFnArgs<O = undefined> = CombineArgsAndOptions<
  GetOneByIdArgs,
  O
>

export type GetOneByIdFn<O = undefined> = <T>(
  args: GetOneByIdFnArgs<O>,
) => Promise<T | null>
