import type {
  GetOneFn,
  GetOneFnArgs,
} from '@/protocols/adapters/functions/get-one-function.protocol'
import type { FindOneOptions, MongoClient } from 'mongodb'

export function getOneFromMongodb(
  client: MongoClient,
  opts?: FindOneOptions<unknown>,
): GetOneFn {
  return async function <T>(args: GetOneFnArgs<T>): Promise<T | null> {
    const { from: collectionName, by: key, matching: value } = args

    const founded = await client
      .db()
      .collection(collectionName)
      .findOne<T>({ [key]: value }, opts)

    return founded
  }
}
