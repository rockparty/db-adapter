import { GetOneFnArgs, InsertOneFnArgs } from '@/protocols'

interface Foo {
  foo: string
}

export const collectionName = 'test'
export const payload: Foo = { foo: 'bar' }
export const key: keyof Foo = 'foo'
export const value = payload[key]

export const insertOneArgs: InsertOneFnArgs<Foo> = {
  in: collectionName,
  as: payload,
}

export const getOneArgs: GetOneFnArgs<Foo> = {
  from: collectionName,
  by: key,
  matching: value,
}
