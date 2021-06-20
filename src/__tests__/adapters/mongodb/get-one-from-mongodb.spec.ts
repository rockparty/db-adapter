import { getOneFromMongodb } from '@/adapters/mongodb/functions/get-one-from-mongodb'
import { GetOneFnArgs } from '@/protocols'
import { clone, equals, isTruthy, omit } from '@/utils'
import { expectToBeTrue } from '@/__tests__/__helpers__'
import { mongodbTestHelper } from '@/__tests__/__helpers__/mongodb.test-helper'

describe('GetOneInMongodb', () => {
  const { start, stop, client } = mongodbTestHelper()

  beforeAll(async () => await start())

  afterAll(async () => await stop())

  const makeSut = () => {
    const collectionName = 'test'
    const payload = { foo: 'bar' }
    const args: GetOneFnArgs<typeof payload> = {
      from: collectionName,
      by: 'foo',
      matching: payload['foo'],
    }
    return {
      sut: getOneFromMongodb(client()),
      collectionName,
      payload,
      args,
    }
  }

  it('should return falsy', async () => {
    const { sut, args, collectionName, payload } = makeSut()

    const response = await sut(args)

    const fromDb = await client()
      .db()
      .collection(collectionName)
      .findOne(payload)

    const result = !isTruthy(response) && !isTruthy(fromDb)
    expectToBeTrue(result, { printIfNotTrue: response })
  })

  it('should return truthy', async () => {
    const { sut, collectionName, payload, args } = makeSut()

    const { ops } = await client()
      .db()
      .collection(collectionName)
      .insertOne(clone(payload))
    const inserted = ops[0]

    const response = await sut(args)

    const fromDb = await client()
      .db()
      .collection(collectionName)
      .findOne(payload)

    const result =
      isTruthy(response) &&
      isTruthy(fromDb) &&
      equals(payload, omit(inserted, '_id'))
    expectToBeTrue(result, { printIfNotTrue: { inserted, response, fromDb } })
  })
})
