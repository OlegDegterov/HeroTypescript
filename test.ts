export type ShowObject<T> = {
  [I in keyof T]: T[I];
};
