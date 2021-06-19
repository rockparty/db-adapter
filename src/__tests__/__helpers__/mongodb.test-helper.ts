import { MongoClient } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

export function mongodbTestHelper() {
  let mongoMemoryServer: MongoMemoryServer
  let client: MongoClient
  let dbUri: string

  const start = async (): Promise<void> => {
    mongoMemoryServer = new MongoMemoryServer()
    dbUri = await mongoMemoryServer.getUri()
    client = await new MongoClient(dbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }).connect()
  }

  const stop = async (): Promise<void> => {
    await client.close()
    await mongoMemoryServer.stop()
  }

  return {
    client: () => client,
    dbUri: () => dbUri,
    start,
    stop,
  }
}
