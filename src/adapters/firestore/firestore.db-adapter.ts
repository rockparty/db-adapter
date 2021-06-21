import type {
  InsertOneAdapter,
  GetOneAdapter,
  UpdateOneAdapter,
  DeleteOneAdapter,
} from '@/protocols/adapters'
import {
  deleteOneFromFirestore,
  getOneFromFirestore,
  insertOneInFirestore,
  updateOneInFirestore,
} from './functions'
import { initializeApp } from 'firebase-admin'
import { FirestoreAdapterArgs } from './protocols'

type FirestoreDbAdapter = InsertOneAdapter &
  GetOneAdapter &
  UpdateOneAdapter &
  DeleteOneAdapter

export async function firestoreDbAdapter(
  ...args: FirestoreAdapterArgs
): Promise<FirestoreDbAdapter> {
  const admin = initializeApp(args['0'], args['1'])
  const db = admin.firestore()
  return {
    insertOne: insertOneInFirestore(db),
    getOne: getOneFromFirestore(db),
    updateOne: updateOneInFirestore(db),
    deleteOne: deleteOneFromFirestore(db),
  }
}
