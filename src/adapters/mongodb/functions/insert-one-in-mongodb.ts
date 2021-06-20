import type {
  InsertOneFn,
  InsertOneFnArgs,
} from '@/protocols/factories/functions/insert-one-factory.protocol'
import { clone } from '@/utils'
import type { CollectionInsertOneOptions, MongoClient } from 'mongodb'

export function insertOneInMongodb(
  client: MongoClient,
  opts?: CollectionInsertOneOptions,
): InsertOneFn {
  return async function <T>(args: InsertOneFnArgs<T>): Promise<T> {
    const { in: collectionName, as: payload } = args

    await client.db().collection(collectionName).insertOne(clone(payload), opts)

    return payload
  }
}
