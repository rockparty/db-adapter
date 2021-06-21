import type { UpdateOneByIdFn } from './functions/update-one-by-id-function.protocol'

export interface UpdateOneByIdAdapter<O = undefined> {
  updateOneById: UpdateOneByIdFn<O>
}
