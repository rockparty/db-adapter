import type { CombineArgsAndOptions } from './helpers'

interface UpdateOneByIdArgs<T, U extends Partial<T>> {
  from: string
  id: unknown
  as: U
}

export type UpdateOneByIdFnArgs<T, U, O = undefined> = CombineArgsAndOptions<
  UpdateOneByIdArgs<T, U>,
  O
>

export type UpdateOneByIdFn<O = undefined> = <T, U>(
  args: UpdateOneByIdFnArgs<T, U, O>,
) => Promise<(T & U) | null>
