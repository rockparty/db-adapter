import type {
  UpdateOneFn,
  UpdateOneFnArgs,
} from '@/protocols/adapters/functions/update-one-function.protocol'
import type { UpdateOneOptions, MongoClient } from 'mongodb'

export function updateOneInMongodb(
  client: MongoClient,
  opts?: UpdateOneOptions,
): UpdateOneFn {
  return async function <T, U>(
    args: UpdateOneFnArgs<T, U>,
  ): Promise<(T & U) | null> {
    const { from: collectionName, by: key, matching: value, as: payload } = args

    const { value: updated } = await client
      .db()
      .collection(collectionName)
      .findOneAndUpdate(
        { [key]: value },
        { $set: payload },
        {
          ...opts,
          returnDocument: 'after',
        },
      )
    delete updated?._id

    return updated
  }
}
