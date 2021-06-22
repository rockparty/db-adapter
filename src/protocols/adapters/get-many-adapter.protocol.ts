import type { GetManyFn } from './functions/get-many-function.protocol'

export interface GetManyAdapter<
  O = undefined,
  Collection extends string = string,
> {
  getMany: GetManyFn<O, Collection>
}
