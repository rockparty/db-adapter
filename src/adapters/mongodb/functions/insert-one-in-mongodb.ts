import type {
  InsertOneFn,
  InsertOneFnArgs,
} from '@/protocols/adapters/functions/insert-one-function.protocol'
import type { MongodbInsertOneOptions } from '../protocols'
import { clone } from '@/utils'
import type { CollectionInsertOneOptions, MongoClient } from 'mongodb'

export function insertOneInMongodb(
  client: MongoClient,
): InsertOneFn<CollectionInsertOneOptions> {
  return async function <T>(
    args: InsertOneFnArgs<T, MongodbInsertOneOptions>,
  ): Promise<T> {
    const { in: collectionName, as: payload, opts } = args

    await client.db().collection(collectionName).insertOne(clone(payload), opts)

    return payload
  }
}
