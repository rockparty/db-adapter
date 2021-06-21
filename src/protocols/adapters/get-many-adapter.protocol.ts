import type { GetManyFn } from './functions/get-many-function.protocol'

export interface GetManyAdapter<O = undefined> {
  getMany: GetManyFn<O>
}
