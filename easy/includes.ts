// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments.
// The output should be a boolean true or false.

// type ArrayToValue<T extends unknown[]> = T[number];

// type Includes<T extends unknown[], K> = K extends ArrayToValue<T>
//   ? true
//   : false;

type Includes<T extends unknown[], K> = K extends T[number] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
