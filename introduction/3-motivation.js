let symbol1 = Symbol("sym");
let symbol2 = Symbol("sym2");
let obj = {
  name: "Bhumij",
  age: 20,
  [symbol1]: "hidden value",
  [symbol2]: "hidden",
};
console.log(Object.getOwnPropertySymbols(obj));
console.log(obj[symbol1]);
