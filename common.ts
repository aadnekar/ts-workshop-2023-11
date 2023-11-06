export type TODO = never;
export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;

export type Expect <T extends true> = T;

export type Tuple = [any, ...any[]];

/**
 * Compute is a helper converting intersections of objects into
 * flat, plain object types.
 *
 * @example
 * Compute<{ a: string } & { b: string }> -> { a: string, b: string }
 */
export type Compute<obj> = { [k in keyof obj]: obj[k] } & unknown;
