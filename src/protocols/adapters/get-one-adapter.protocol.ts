import type { GetOneFn } from './functions/get-one-function.protocol'

export interface GetOneAdapter<
  O = undefined,
  Collection extends string = string,
> {
  getOne: GetOneFn<O, Collection>
}
