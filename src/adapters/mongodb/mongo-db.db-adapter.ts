import type { InsertOneAdapter, GetOneAdapter } from '@/protocols/adapters'
import { insertOneInMongodb, getOneFromMongodb } from './functions'
import { MongoClient } from 'mongodb'

type MongodbDbAdapter = InsertOneAdapter & GetOneAdapter

export async function mongodbDbAdapter(uri: string): Promise<MongodbDbAdapter> {
  const client = await MongoClient.connect(uri)
  return {
    insertOne: insertOneInMongodb(client),
    getOne: getOneFromMongodb(client),
  }
}
