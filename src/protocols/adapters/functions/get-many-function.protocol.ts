import type { CombineArgsAndOptions } from './helpers'

interface GetManyArgs<T> {
  from: string
  by: keyof T & string
  matching: unknown
}

export type GetManyFnArgs<T, O = undefined> = CombineArgsAndOptions<
  GetManyArgs<T>,
  O
>

export type GetManyFn<O = undefined> = <T>(
  args: GetManyFnArgs<T, O>,
) => Promise<T[]>
