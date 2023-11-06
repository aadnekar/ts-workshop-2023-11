import { Expect, Equal } from '../common';

/**
 * Give a smart type to the `fetchTable` function!
 *
 * It should take a metric query that looks like
 * `some.metric.name{filter} by {some,groups}`, and return
 * a Promise of a Tuple of column objects.
 *
 * A column object looks like `{ name, values }`, where `name`
 * is a string and `values` is either a list of strings or
 * a list of numbers.
 *
 * @example
 * ```ts
 * const res = await fetchTable('metric{*} by {a,b}')
 * //     ^ [
 * //         { name: "a", values: string[] },
 * //         { name: "b", values: string[] },
 * //         { name: "metric{*}", values: number[] },
 * //       ]
 */
declare function fetchTable<Q extends string>(
query: Q
): Promise<TableFromQuery<Q>>;

// Split implemented in part5-loops
type Split<Str, Separator extends string> =
    Str extends `${infer Element}${Separator}${infer Rest}`
        ? [Element, ...Split<Rest, Separator>]
        : [Str];

// TODO Implement this: 🤘
type TableFromQuery<Q> = Q extends `${infer Metric} by {${infer Groups}}`
    ? [...ColumnsFromGroups<Split<Groups, ",">>, Column<Metric, number>]
    : [];

type ColumnsFromGroups<T> =
    T extends [infer Group, ...infer Rest]
        ? [Column<Group, string>, ...ColumnsFromGroups<Rest>]
        : [];

type Column<Name, Value> = { name: Name; values: Value[] };

const res1 = fetchTable("system.mem.free{service:a} by {host}");
type expected1 = Promise<
[
  Column<"host", string>, 
  Column<"system.mem.free{service:a}", number>,
]
>;
type test1 = Expect<Equal<typeof res1, expected1>>;

const res2 = fetchTable("system.cpu.user{*} by {env,account,service}");
type expected2 = Promise<
[
  Column<"env", string>, 
  Column<"account", string>, 
  Column<"service", string>, 
  Column<"system.cpu.user{*}", number>,
]
>;
type test2 = Expect<Equal<typeof res2, expected2>>;

const res3 = fetchTable(
"sum:dd.frontend.perf.count.react.mount{*} by {viz,view}"
);
type expected3 = Promise<
[
  Column<"viz", string>, 
  Column<"view", string>, 
  Column<"sum:dd.frontend.perf.count.react.mount{*}", number>,
]
>;
type test3 = Expect<Equal<typeof res3, expected3>>;
