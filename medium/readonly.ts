//Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
//K specify the set of properties of T that should set to Readonly.
// When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

import { ShowObject } from "../test";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyExclude<T, K> = T extends K ? never : T;

type MyReadonly<T, K extends string> = {
  readonly [I in K]: I;
} & {
  [I in MyExclude<keyof T, K>]: T[I];
};

type R = ShowObject<MyReadonly<Todo, "title" | "description">>;

const todo: MyReadonly<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
