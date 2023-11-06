import { Equal, Expect } from "../common"

/**
 * Let's implement a type-level version of the `safeHead`
 * function!
 * 
 * It should take a tuple, a default type, and return the
 * default if the tuple is empty, otherwise return the first 
 * type in this tuple.
 */
namespace tupleHead {
  type SafeHead<Tuple extends any[], Default> = TODO

  type res1 = SafeHead<[1, 2], 0>
  type test1 = Expect<Equal<res1, 1>>

  type res2 = SafeHead<[], false>
  type test2 = Expect<Equal<res2, false>>
}

/**
 * Implement a generic that drops the first
 * element of a tuple and returns all other
 * elements.
 */
namespace dropFirst {
  type DropFirst<Tuple extends any[]> = TODO

  type res1 = DropFirst<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, [2, 3]>>;

  type res2 = DropFirst<[1]>;
  type test2 = Expect<Equal<res2, []>>;

  type res3 = DropFirst<[]>;
  type test3 = Expect<Equal<res3, []>>;
}

/**
 * Implement a generic that extracts
 * the last element of a tuple.
 */
namespace last {
  type Last<Tuple extends any[]> = TODO

  type res1 = Last<[1, 2, 3]>;
  type test1 = Expect<Equal<res1, 3>>;

  type res2 = Last<[1]>;
  type test2 = Expect<Equal<res2, 1>>;

  type res3 = Last<[]>;
  type test3 = Expect<Equal<res3, never>>;
}

/**
 * Implement generic type that takes a string literal
 * and only return its first word.
 */
namespace getFirstWord {
  type GetFirstWord<Str> = TODO

  type res1 = GetFirstWord<"Frontend Summit 🎉">;
  type test1 = Expect<Equal<res1, "Frontend">>;

  type res2 = GetFirstWord<"🔥">;
  type test2 = Expect<Equal<res2, "🔥">>;

  type res3 = GetFirstWord<"Albus Percival Wulfric Brian Dumbledore">;
  type test3 = Expect<Equal<res3, "Albus">>;
}

/**
 * Write a type-level `GetGroups` function that
 * extracts the comma separated grouping tags from a metric query.
 * 
 * For example, given the string "some.metric{filter} by {a,b,c}",
 * `GetGroups` should return "a,b,c".
 */
namespace getGroups {
  type GetGroups<Query> = TODO

  type groups1 = GetGroups<"system.cpu.user{*} by {env,account,service}">;
  type test1 = Expect<Equal<groups1, "env,account,service">>
  
  type groups2 = GetGroups<"perf.render.duration{component:univiz} by {view,viz}">;
  type test2 = Expect<Equal<groups2, "view,viz">>
}
