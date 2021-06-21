import type { GetOneFn } from './functions/get-one-function.protocol'

export interface GetOneAdapter<O = undefined> {
  getOne: GetOneFn<O>
}
