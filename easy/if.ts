// Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F.
// C is expected to be either true or false while T and F can be any type.

type If<T, A, B> = T extends true ? A : B;

type If2<T, A, B> = T extends boolean ? (T extends true ? A : B) : never;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If2<false, "a", "b">; // expected to be 'b'
