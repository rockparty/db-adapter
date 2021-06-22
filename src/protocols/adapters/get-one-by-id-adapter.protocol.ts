import type { GetOneByIdFn } from './functions/get-one-by-id-function.protocol'

export interface GetOneByIdAdapter<
  O = undefined,
  Base = any,
  IdKey extends keyof Base & string = any,
  Collection extends string = string,
> {
  getOneById: GetOneByIdFn<O, Base, IdKey, Collection>
}
