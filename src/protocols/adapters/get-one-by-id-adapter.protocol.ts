import type { GetOneByIdFn } from './functions/get-one-by-id-function.protocol'

export interface GetOneByIdAdapter<O = undefined> {
  getOneById: GetOneByIdFn<O>
}
