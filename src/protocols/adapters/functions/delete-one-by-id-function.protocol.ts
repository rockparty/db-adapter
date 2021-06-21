import type { CombineArgsAndOptions } from './helpers'

interface DeleteOneByIdArgs {
  from: string
  id: unknown
}

export type DeleteOneByIdFnArgs<O = undefined> = CombineArgsAndOptions<
  DeleteOneByIdArgs,
  O
>

export type DeleteOneByIdFn<O = undefined> = (
  args: DeleteOneByIdFnArgs<O>,
) => Promise<boolean>
