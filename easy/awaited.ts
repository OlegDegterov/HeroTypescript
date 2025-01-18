// if we have a type which is a wrapped type like Promise, how can we get the type which is inside the wrapped type?
import { ShowObject } from "../test";

type ExampleType = Promise<string>;

type MyAwaited<T> = T extends Promise<infer K> ? K : never;

type Result = MyAwaited<ExampleType>; // string
