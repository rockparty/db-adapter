import type {
  InsertOneFnArgs,
  InsertOneFactory,
  InsertOneFactoryArgs,
} from '@/protocols/factories/functions/insert-one-factory.protocol'
import { clone } from '@/utils'

export function insertOneFactory(opts: InsertOneFactoryArgs): InsertOneFactory {
  const { db } = opts
  return async function <T>(args: InsertOneFnArgs<T>): Promise<T> {
    const payload = clone(args.as)
    const data = await db.insertOne({
      ...args,
      as: payload,
    })
    return data
  }
}
