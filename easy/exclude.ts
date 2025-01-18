// Implement the built-in Exclude<T, U>

// Here, a check is performed: if T is a subtype of K, then T is returned; if not, then never is returned.
type MyExclude<T, K> = T extends K ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
