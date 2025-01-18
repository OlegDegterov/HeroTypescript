// Given an array, transform it into an object type and the key/value must be in the provided array.
import { ShowObject } from "../test";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type ArrayToValue<T> = (T & unknown[])[number];

type TupleToObject<T> = {
  [I in ArrayToValue<T> & string]: I;
};

type T = ShowObject<TupleToObject<typeof tuple>>;

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
