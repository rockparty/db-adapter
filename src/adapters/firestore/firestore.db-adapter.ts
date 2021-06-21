import type { InsertOneAdapter, GetOneAdapter } from '@/protocols/adapters'
import { getOneFromFirestore, insertOneInFirestore } from './functions'
import { initializeApp } from 'firebase-admin'
import { FirestoreAdapterArgs } from './protocols'

type FirestoreDbAdapter = InsertOneAdapter & GetOneAdapter

export async function firestoreDbAdapter(
  ...args: FirestoreAdapterArgs
): Promise<FirestoreDbAdapter> {
  const admin = initializeApp(args['0'], args['1'])
  const db = admin.firestore()
  return {
    insertOne: insertOneInFirestore(db),
    getOne: getOneFromFirestore(db),
  }
}
