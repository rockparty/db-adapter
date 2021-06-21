import { CombineArgsAndOptions } from './helpers'

interface DeleteOneArgs<T> {
  from: string
  by: keyof T & string
  matching: unknown
}

export type DeleteOneFnArgs<T, O = undefined> = CombineArgsAndOptions<
  DeleteOneArgs<T>,
  O
>

export type DeleteOneFn<O = undefined> = <T>(
  args: DeleteOneFnArgs<T, O>,
) => Promise<boolean>
