import type {
  InsertOneFn,
  InsertOneFnArgs,
} from '@/protocols/factories/functions/insert-one-factory.protocol'
import type { CollectionInsertOneOptions, MongoClient } from 'mongodb'

export function insertOneInMongodb(
  client: MongoClient,
  opts?: CollectionInsertOneOptions,
): InsertOneFn {
  return async function <T>(args: InsertOneFnArgs<T>): Promise<T> {
    const { in: collectionName, as: payload } = args

    await client.db().collection(collectionName).insertOne(payload, opts)

    return payload
  }
}
