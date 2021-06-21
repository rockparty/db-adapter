import { CombineArgsAndOptions } from './helpers'

interface GetOneArgs<T> {
  from: string
  by: keyof T & string
  matching: unknown
}

export type GetOneFnArgs<T, O = undefined> = CombineArgsAndOptions<
  GetOneArgs<T>,
  O
>

export type GetOneFn<O = undefined> = <T>(
  args: GetOneFnArgs<T, O>,
) => Promise<T | null>
