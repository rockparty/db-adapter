import type { GetOneAdapter } from '../adapters/get-one-adapter.protocol'
import type { GetOneFnArgs } from '../adapters/functions/get-one-function.protocol'

export interface GetOneFactoryArgs {
  db: GetOneAdapter
}

export type GetOneFactory = <T>(args: GetOneFnArgs<T>) => Promise<T | null>
