import type { DeleteOneAdapter } from '../adapters/delete-one-adapter.protocol'
import type { DeleteOneFnArgs } from '../adapters/functions/delete-one-function.protocol'

export interface DeleteOneFactoryArgs {
  db: DeleteOneAdapter
}

export type DeleteOneFactory = <T>(args: DeleteOneFnArgs<T>) => Promise<boolean>
