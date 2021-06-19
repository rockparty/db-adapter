import { MongoMemoryServer } from 'mongodb-memory-server'

export function mongoMemoryServerFactory() {
  let mongoMemoryServer: MongoMemoryServer
  return {
    server: () => mongoMemoryServer,
    start: (): Promise<string> => {
      mongoMemoryServer = new MongoMemoryServer()
      return mongoMemoryServer.getUri()
    },
    stop: (): Promise<boolean> => mongoMemoryServer.stop(),
  }
}
