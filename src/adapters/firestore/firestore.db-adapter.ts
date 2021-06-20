import type { InsertOneAdapter, GetOneAdapter } from '@/protocols/adapters'
import { getOneFromFirestore, insertOneInFirestore } from './functions'
import type { ServiceAccount } from 'firebase-admin'
import { initializeApp, credential } from 'firebase-admin'

type FirestoreDbAdapter = InsertOneAdapter & GetOneAdapter

export async function firestoreDbAdapter(
  credentials: ServiceAccount,
): Promise<FirestoreDbAdapter> {
  const admin = initializeApp({
    credential: credential.cert(credentials),
  })
  const db = admin.firestore()
  return {
    insertOne: insertOneInFirestore(db),
    getOne: getOneFromFirestore(db),
  }
}
