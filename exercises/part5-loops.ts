import { Equal, Expect } from "../common";

/**
 * Implement a generic that takes a tuple type,
 * and reverse it's ordering.
 */
namespace reverse {
  type Reverse<Tuple> = TODO

  type res1 = Reverse<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, [3, 2, 1]>>;

  type res2 = Reverse<[]>;
  type test2 = Expect<Equal<res2, []>>;

  type res3 = Reverse<["😃", "🙂", "😐", "😢", "😭"]>;
  type test3 = Expect<Equal<res3, ["😭", "😢", "😐", "🙂", "😃"]>>;
}

/**
 * Define a `Split`  generic that behaves just
 * like the value-level `.split(separator)` string method,
 * and splits a string into chunks using a separator.
 */
namespace split {
  type Split<Str, Separator extends string> = TODO;

  type res1 = Split<"a.b.c", ".">;
  type test1 = Expect<Equal<res1, ["a", "b", "c"]>>;

  type res2 = Split<"frontend summit !", " ">;
  type test2 = Expect<Equal<res2, ["frontend", "summit", "!"]>>;

  type res3 = Split<"env,service", ",">;
  type test3 = Expect<Equal<res3, ["env", "service"]>>;
}
