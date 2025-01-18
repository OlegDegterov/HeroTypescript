// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments.
// The output should be a new array that includes inputs in ltr order

import { ShowObject } from "../test";

type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B];

// doesnt work
type Concat2<A, B> = [...(A & unknown[]), ...(B & unknown[])];
//

type Concat3<A, B> = [
  ...(A extends unknown[] ? A : []),
  ...(B extends unknown[] ? B : [])
];

type R = ShowObject<Concat<[1], [2]>>;

type Result = Concat<[1], [2]>; // expected to be [1, 2]
type Result2 = Concat2<[1], [2]>; // expected to be [1, 2]
type Result3 = Concat3<[1], [2]>; // expected to be [1, 2]
