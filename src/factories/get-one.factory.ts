import type {
  GetOneFnArgs,
  GetOneFactory,
  GetOneFactoryArgs,
} from '@/protocols'

export function getOneFactory(opts: GetOneFactoryArgs): GetOneFactory {
  const { db } = opts
  return async function <T>(args: GetOneFnArgs<T>): Promise<T | null> {
    const founded = await db.getOne(args)
    return founded
  }
}
