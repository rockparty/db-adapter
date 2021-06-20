import type {
  InsertOneFnArgs,
  InsertOneFactory,
  InsertOneFactoryArgs,
} from '@/protocols'

export function insertOneFactory(opts: InsertOneFactoryArgs): InsertOneFactory {
  const { db } = opts
  return async function <T>(args: InsertOneFnArgs<T>): Promise<T> {
    const insertedData = await db.insertOne(args)
    return insertedData
  }
}
