import type { Expect, Equal, Compute, TODO } from '../common';

/**
 * Type the `getFullName` function to take
 * a first name and a last name as string literal
 * and concatenate them.
 */
namespace getFullName {
  declare function getFullName<FirstName extends string, LastName extends string>(firstName: FirstName, lastName: LastName): `${FirstName} ${LastName}`;;

  const res1 = getFullName('Ada', 'Lovelace')
  type test1 = Expect<Equal<typeof res1, "Ada Lovelace">>

  const res2 = getFullName('Haskell', 'Curry')
  type test2 = Expect<Equal<typeof res2, "Haskell Curry">>
}

/**
 * Type the HTTPHeaders object so that it has an `Authentication`
 * property that starts with `Bearer ` and ends with a JWT token.
 *
 * Note: JWT tokens contain 3 parts, separated by dots.
 * More info on https://jwt.io
 * 
 * Hint: You shouldn't need a conditional type.
 */
namespace headers {
  type HTTPHeaders = {
    Authentication: `Bearer ${string}.${string}.${string}`;
  };

  const test1: HTTPHeaders = {
    // ✅ This is a correct authentication header:
    Authentication:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtIjoiWW91J3JlIGEgbmVyZCA7KSJ9.gfB7ECp1ePeIB4Mh_3Ypci4y7jFjMH9w_BB4rZcMvQM",
  };

  const test2: HTTPHeaders = {
    // @ts-expect-error: ❌ Authentication should start with 'Bearer'
    Authentication: "a.b.c",
  };

  const test3: HTTPHeaders = {
    // @ts-expect-error: ❌ Authentication should start with 'Bearer'
    Authentication: "oops a.b.c",
  };

  const test4: HTTPHeaders = {
    // @ts-expect-error: ❌ token is invalid, only 1 part.
    Authentication: "Bearer abc",
  };

  const test5: HTTPHeaders = {
    // @ts-expect-error: ❌ token is invalid, only 2 parts.
    Authentication: "Bearer abc.123",
  };
}

/**
 * Type the `isMetricsQuery` function to only take
 * valid metric queries, which look like this:
 * `some.metric{filters} by {groups}`
 */
namespace isMetricsQuery {
  declare function isMetricsQuery(
    query: `${string}.${string}{${string}} by {${string}}`
  ): true;

  // ✅
  isMetricsQuery(`react.mount{component:univiz} by {viz}`);
  
  // ✅
  isMetricsQuery(`http.request{view} by {endpoint}`);

  // @ts-expect-error: ❌
  isMetricsQuery('this is definitely not a metrics query.');

  // @ts-expect-error: ❌
  isMetricsQuery('oops.no.filters by {🙀}');
}
