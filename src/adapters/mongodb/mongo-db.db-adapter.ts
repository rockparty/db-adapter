import type {
  InsertOneAdapter,
  GetOneAdapter,
  UpdateOneAdapter,
  DeleteOneAdapter,
  GetAllAdapter,
  GetManyAdapter,
} from '@/protocols/adapters'
import type {
  MongodbAdapterArgs,
  MongodbDeleteOneOptions,
  MongodbGetOneOptions,
  MongodbInsertOneOptions,
  MongodbUpdateOneOptions,
} from './protocols'
import {
  insertOneInMongodb,
  getOneFromMongodb,
  updateOneInMongodb,
  deleteOneFromMongodb,
  getAllFromMongodb,
  getManyFromMongodb,
} from './functions'
import { MongoClient } from 'mongodb'

type MongodbDbAdapter = InsertOneAdapter<MongodbInsertOneOptions> &
  GetOneAdapter<MongodbGetOneOptions<unknown>> &
  UpdateOneAdapter<MongodbUpdateOneOptions> &
  DeleteOneAdapter<MongodbDeleteOneOptions<unknown>> &
  GetAllAdapter &
  GetManyAdapter

export async function mongodbDbAdapter(
  ...args: MongodbAdapterArgs
): Promise<MongodbDbAdapter> {
  const client = await MongoClient.connect(args['0'], args['1'])
  return {
    insertOne: insertOneInMongodb(client),
    getOne: getOneFromMongodb(client),
    updateOne: updateOneInMongodb(client),
    deleteOne: deleteOneFromMongodb(client),
    getAll: getAllFromMongodb(client),
    getMany: getManyFromMongodb(client),
  }
}
