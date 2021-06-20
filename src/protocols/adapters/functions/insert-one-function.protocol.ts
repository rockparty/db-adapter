export interface InsertOneFnArgs<T> {
  in: string
  as: T
}

export type InsertOneFn = <T>(args: InsertOneFnArgs<T>) => Promise<T>
