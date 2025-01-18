// Implement a generic First<T> that takes an Array T and returns its first element's type.

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type First<T> = (T & unknown[])[0];
type First2<T extends unknown[]> = T[0];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First2<arr2>; // expected to be 3
