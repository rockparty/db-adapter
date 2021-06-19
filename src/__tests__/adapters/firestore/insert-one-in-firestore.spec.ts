import { insertOneInFirestore } from '@/adapters/firestore/functions'
import { equals, isTruthy } from '@/utils'
import { expectToBeTrue } from '@/__tests__/__helpers__'
import { firestoreTestHelper } from '@/__tests__/__helpers__/firestore.test-helpers'

describe('InsertOneInFirestore', () => {
  const { db } = firestoreTestHelper()

  const makeSut = () => {
    return {
      sut: insertOneInFirestore(db),
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
    const data = await db
      .collection(collectionName)
      .where('foo', '==', payload.foo)
      .get()
    const fromDb = data.docs[0].data()
    const result = isTruthy(fromDb) && equals(payload, fromDb)
    expectToBeTrue(result, { printIfNotTrue: response })
  })
})
