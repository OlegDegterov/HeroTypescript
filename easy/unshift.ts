// Implement the type version of Array.unshift
import {} from "../test";

type Unshift1<T extends unknown[], K> = [K, ...T];
type Unshift2<T, K> = [K, ...(T extends unknown[] ? T : [])];

type Result1 = Unshift1<[1, 2], 0>; // [0, 1, 2]
type Result2 = Unshift2<[1, 2], 0>; // [0, 1, 2]
