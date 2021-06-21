import type { CombineArgsAndOptions } from './helpers'

interface UpdateOneArgs<T, U> {
  from: string
  by: keyof T & string
  matching: unknown
  as: U
}

export type UpdateOneFnArgs<T, U, O = undefined> = CombineArgsAndOptions<
  UpdateOneArgs<T, U>,
  O
>

export type UpdateOneFn<O = undefined> = <T, U>(
  args: UpdateOneFnArgs<T, U, O>,
) => Promise<(T & U) | null>
