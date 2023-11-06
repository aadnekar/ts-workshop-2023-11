import type { Expect, Equal, Compute, TODO } from '../common';

/**
 * Implement a generic that returns the first type
 * in a tuple.
 *
 * Hint: How would you do it if `Tuple` was a value?
 */
namespace first {
  type First<Tuple extends any[]> = TODO;

  type res1 = First<[]>;
  type _test1 = Expect<Equal<Compute<res1>, undefined>>;

  type res2 = First<[string]>;
  type test2 = Expect<Equal<Compute<res2>, string>>;

  type res3 = First<[2, 3, 4]>;
  type test3 = Expect<Equal<Compute<res3>, 2>>;

  type res4 = First<["a", "b", "c"]>;
  type test4 = Expect<Equal<Compute<res4>, "a">>;
}

/**
 * Implement a generic that adds a type to the end
 * of a tuple.
 */
namespace append {
  type Append<Tuple extends any[], Element> = TODO;

  type res1 = Append<[], 1>;
  type test1 = Expect<Equal<res1, [1]>>;

  type res2 = Append<
      [
        { name: "env"; values: string[] },
        { name: "account"; values: string[] }
      ],
      { name: "system.cpu.user{*}"; values: number[] }
    >;
  type test2 = Expect<Equal<res2, [
      { name: "env"; values: string[] },
      { name: "account"; values: string[] },
      { name: "system.cpu.user{*}"; values: number[] }
  ]>>;
}

/**
 * Implement a generic that concatenates two tuples.
 */
namespace concat {
  type Concat<Tuple1 extends any[], Tuple2 extends any[]> = TODO;

  type res1 = Concat<[1, 2, 3], [4, 5]>;
  type test1 = Expect<Equal<res1, [1, 2, 3, 4, 5]>>;

  type res2 = Concat<[1, 2, 3], []>;
  type test2 = Expect<Equal<res2, [1, 2, 3]>>;
}
