import type { DeleteOneByIdFn } from './functions/delete-one-by-id-function.protocol'

export interface DeleteOneByIdAdapter<O = undefined> {
  deleteOneById: DeleteOneByIdFn<O>
}
