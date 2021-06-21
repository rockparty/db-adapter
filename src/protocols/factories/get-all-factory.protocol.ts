import type { GetAllAdapter } from '../adapters/get-all-adapter.protocol'
import type { GetAllFnArgs } from '../adapters/functions/get-all-function.protocol'

export interface GetAllFactoryArgs {
  db: GetAllAdapter
}

export type GetAllFactory = <T>(args: GetAllFnArgs<T>) => Promise<T[]>
