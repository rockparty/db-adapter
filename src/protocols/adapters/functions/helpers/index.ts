export type CombineArgsAndOptions<Args, Opts> = Opts extends undefined
  ? Args
  : Args & { opts?: Opts }
