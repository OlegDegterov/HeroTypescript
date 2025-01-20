//Implement the built-in Omit<T, K> generic without using it.
//Constructs a type by picking all properties from T and then removing K

import {} from "../test";

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K> = {
  [I in MyExclude<keyof T, K>]: T[I];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
