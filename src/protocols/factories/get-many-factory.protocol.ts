import type { GetManyAdapter } from '../adapters/get-many-adapter.protocol'
import type { GetManyFnArgs } from '../adapters/functions/get-many-function.protocol'

export interface GetManyFactoryArgs {
  db: GetManyAdapter
}

export type GetManyFactory = <T>(args: GetManyFnArgs<T>) => Promise<T[]>
