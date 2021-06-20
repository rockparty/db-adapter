import { ObjectID } from 'mongodb'

export type MongoObject<T> = T & { _id?: ObjectID }
