import type { InsertOneAdapter } from '@/protocols/adapters/insert-one-adapter.protocol'
import { insertOneInMongodb } from './functions/insert-one-in-mongodb'
import { MongoClient } from 'mongodb'

type MongodbDbAdapter = InsertOneAdapter

export async function mongodbDbAdapter(uri: string): Promise<MongodbDbAdapter> {
  const client = await MongoClient.connect(uri)
  return {
    insertOne: insertOneInMongodb(client),
  }
}
