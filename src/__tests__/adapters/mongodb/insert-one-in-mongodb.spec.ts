import { insertOneInMongodb } from '@/adapters/mongodb/functions'
import { expectToBeTrue } from '@/__tests__/__helpers__'
import { mongoMemoryServerFactory } from '@/__tests__/__helpers__/mongodb-memory-server.helper'
import { MongoClient } from 'mongodb'

describe('InsertOneInMongodb', () => {
  const mongoMemoryServer = mongoMemoryServerFactory()
  let client: MongoClient
  let dbUri: string

  beforeAll(async () => {
    dbUri = await mongoMemoryServer.start()
    client = await new MongoClient(dbUri).connect()
  })

  afterAll(async () => {
    await client.close()
    await mongoMemoryServer.stop()
  })

  const makeSut = () => {
    return {
      sut: insertOneInMongodb(client),
    }
  }

  it('should insert one', async () => {
    const { sut } = makeSut()
    const collectionName = 'test'
    const payload = { foo: 'bar' }
    const response = sut({
      in: collectionName,
      as: payload,
    })
    const fromDb = await client.db().collection(collectionName).findOne(payload)
    const result = fromDb !== undefined
    expectToBeTrue(result, { printIfNotTrue: response })
  })
})
