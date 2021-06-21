import { CombineArgsAndOptions } from './helpers'

interface GetAllArgs {
  from: string
}

export type GetAllFnArgs<O = undefined> = CombineArgsAndOptions<GetAllArgs, O>

export type GetAllFn<O = undefined> = <T>(args: GetAllFnArgs<O>) => Promise<T[]>
