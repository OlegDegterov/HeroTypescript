interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [I in K]: T[I];
};

type MyPick2<T, K> = {
  [I in K & keyof T]: T[I];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

type TodoPreview2 = MyPick2<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
