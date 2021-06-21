import type { GetAllFn } from './functions/get-all-function.protocol'

export interface GetAllAdapter<O = undefined> {
  getAll: GetAllFn<O>
}
