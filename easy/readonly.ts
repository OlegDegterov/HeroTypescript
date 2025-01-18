import { ShowObject } from "../test";
interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [I in keyof T]: T[I];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

type T = ShowObject<MyReadonly<Todo>>;

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
