export interface GetOneFnArgs<T> {
  from: string
  by: keyof T & string
  matching: unknown
}

export type GetOneFn = <T>(args: GetOneFnArgs<T>) => Promise<T | null>
