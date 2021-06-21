import type { UpdateOneAdapter } from '../adapters/update-one-adapter.protocol'
import type { UpdateOneFnArgs } from '../adapters/functions/update-one-function.protocol'

export interface UpdateOneFactoryArgs {
  db: UpdateOneAdapter
}

export type UpdateOneFactory = <T, U>(
  args: UpdateOneFnArgs<T, U>,
) => Promise<(T & U) | null>
