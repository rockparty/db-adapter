import { insertOneInMongodb } from '@/adapters/mongodb/functions'
import { equals, isTruthy, omit } from '@/utils'
import { expectToBeTrue } from '@/__tests__/__helpers__'
import { mongodbTestHelper } from '@/__tests__/__helpers__/mongodb.test-helper'

describe('InsertOneInMongodb', () => {
  const { start, stop, client } = mongodbTestHelper()

  beforeAll(async () => await start())

  afterAll(async () => await stop())

  const makeSut = () => {
    return {
      sut: insertOneInMongodb(client()),
    }
  }

  it('should insert one', async () => {
    const { sut } = makeSut()
    const collectionName = 'test'
    const payload = { foo: 'bar' }
    const response = await sut({
      in: collectionName,
      as: payload,
    })
    const fromDb = await client()
      .db()
      .collection(collectionName)
      .findOne(response)
    const result = isTruthy(fromDb) && equals(payload, omit(fromDb, '_id'))
    expectToBeTrue(result, { printIfNotTrue: response })
  })
})
