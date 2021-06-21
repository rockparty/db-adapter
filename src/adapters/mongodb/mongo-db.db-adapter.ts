import type {
  InsertOneAdapter,
  GetOneAdapter,
  UpdateOneAdapter,
} from '@/protocols/adapters'
import type {
  MongodbAdapterArgs,
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

export async function mongodbDbAdapter(
  ...args: MongodbAdapterArgs
): Promise<MongodbDbAdapter> {
  const client = await MongoClient.connect(args['0'], args['1'])
  return {
    insertOne: insertOneInMongodb(client),
    getOne: getOneFromMongodb(client),
    updateOne: updateOneInMongodb(client),
  }
}
