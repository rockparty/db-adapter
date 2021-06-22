import type { GetAllFn } from './functions/get-all-function.protocol'

export interface GetAllAdapter<
  O = undefined,
  Collection extends string = string,
> {
  getAll: GetAllFn<O, Collection>
}
