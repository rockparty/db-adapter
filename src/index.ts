import { mongodbDbAdapter as mongodbAdapter } from './adapters/mongodb/mongo-db.db-adapter'
import { firestoreDbAdapter as firestoreAdapter } from './adapters/firestore/firestore.db-adapter'
import * as protocols from './protocols'

export default {
  mongodbAdapter,
  firestoreAdapter,
  protocols,
}
