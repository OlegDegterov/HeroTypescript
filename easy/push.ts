// Implement the generic version of Array.push
import {} from "../test";

type Push<T extends unknown[], K> = [...T, K];

//doesnt work
type Push2<T, K> = [...(T & unknown[]), K];
//

type Push3<T, K> = [...(T extends unknown[] ? T : []), K];

type Result1 = Push<[1, 2], "3">; // [1, 2, '3']
type Result2 = Push2<[1, 2], "3">; // [1, 2, '3']
type Result3 = Push3<[1, 2], "3">; // [1, 2, '3']
