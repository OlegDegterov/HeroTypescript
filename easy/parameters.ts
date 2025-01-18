// Implement the built-in Parameters generic without using it.

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T> = T extends (...args: infer R) => unknown ? R : never;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
