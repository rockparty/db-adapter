export function cloneObj<T>(obj: T): T {
  return { ...Object(obj) }
}
