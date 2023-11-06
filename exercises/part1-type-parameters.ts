import { Expect, Equal } from '../common';

/**
 * The `identity` function takes a value of any type
 * and returns it. Make it generic!
 */
namespace identity {

  function identity<TODO>(a: TODO): TODO {
    return a;
  }

  let input1 = 10;
  let res1 = identity(input1);
  
  type test1 = Expect<Equal<typeof res1, number>>;

  let input2 = "Hello";
  let res2 = identity(input2);
  
  type test2 = Expect<Equal<typeof res2, string>>;

}

/**
 * `safeHead` takes an array, a default value
 * and returns the first element of the array
 * if it isn't empty. Make it generic!
 */
namespace safeHead {

  function safeHead(array: TODO[], defaultValue: TODO): TODO {
    return array[0] ?? defaultValue;
  }

  let input1 = [1, 2, 3];
  let res1 = safeHead(input1, 0);
  
  type test1 = Expect<Equal<typeof res1, number>>;

  let input2 = ["Hello", "Hola", "Bonjour"];
  let res2 = safeHead(input2, "Hi");
  
  type test2 = Expect<Equal<typeof res2, string>>;

}

/**
 * Here is the first step to properly type the `fetchTable`
 * function.
 *
 * Make it generic and infer the provided query's type
 * as a string literal type!
 */
namespace fetchTable1 {
  declare function fetchTable(
    query: TODO
  ): Promise<TODO>;

  const res1 = fetchTable("system.cpu.user{*} by {env,account,service}");
  type test1 = Expect<
    Equal<
      typeof res1,
      Promise<"system.cpu.user{*} by {env,account,service}">
    >
  >;

  const res2 = fetchTable(
    "perf.render.duration{component:univiz} by {view,viz}"
  );
  type test2 = Expect<
    Equal<
      typeof res2,
      Promise<"perf.render.duration{component:univiz} by {view,viz}">
    >
  >;

  // @ts-expect-error: number isn't assignable to string
  const res3 = fetchTable(123);
}

