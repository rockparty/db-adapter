import type {
  InsertOneAdapter,
  GetOneAdapter,
  UpdateOneAdapter,
} from '@/protocols/adapters'
import type {
  MongodbGetOneOptions,
  MongodbInsertOneOptions,
  MongodbUpdateOneOptions,
} from './protocols'
import {
  insertOneInMongodb,
  getOneFromMongodb,
  updateOneInMongodb,
} from './functions'
import { MongoClient } from 'mongodb'

type MongodbDbAdapter = InsertOneAdapter<MongodbInsertOneOptions> &
  GetOneAdapter<MongodbGetOneOptions<unknown>> &
  UpdateOneAdapter<MongodbUpdateOneOptions>

export async function mongodbDbAdapter(uri: string): Promise<MongodbDbAdapter> {
  const client = await MongoClient.connect(uri)
  return {
    insertOne: insertOneInMongodb(client),
    getOne: getOneFromMongodb(client),
    updateOne: updateOneInMongodb(client),
  }
}
