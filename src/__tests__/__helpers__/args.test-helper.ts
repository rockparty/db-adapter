import {
  DeleteOneFnArgs,
  GetOneFnArgs,
  InsertOneFnArgs,
  UpdateOneFnArgs,
} from '@/protocols'

interface Foo {
  foo: string
}

export const collectionName = 'test'
export const payload: Foo = { foo: 'bar' }
export const modified: Partial<Foo> = { foo: 'foo' }
export const key: keyof Foo = 'foo'
export const value = payload[key]
export const modifiedValue = modified[key]

export const insertOneArgs: InsertOneFnArgs<Foo> = {
  in: collectionName,
  as: payload,
}

export const getOneArgs: GetOneFnArgs<Foo> = {
  from: collectionName,
  by: key,
  matching: value,
}

export const updateOneArgs: UpdateOneFnArgs<Foo, Partial<Foo>> = {
  from: collectionName,
  by: key,
  matching: value,
  as: modified,
}

export const deleteOneArgs: DeleteOneFnArgs<Foo> = {
  from: collectionName,
  by: key,
  matching: value,
}
