export interface UpdateOneFnArgs<T, U> {
  from: string
  by: keyof T & string
  matching: unknown
  as: U
}

export type UpdateOneFn = <T, U>(
  args: UpdateOneFnArgs<T, U>,
) => Promise<(T & U) | null>
