import type { initializeApp } from 'firebase-admin'

export type FirestoreAdapterArgs = Parameters<typeof initializeApp>
