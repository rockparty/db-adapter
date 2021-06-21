import type { DeleteOneFn } from './functions/delete-one-function.protocol'

export interface DeleteOneAdapter<O = undefined> {
  deleteOne: DeleteOneFn<O>
}
