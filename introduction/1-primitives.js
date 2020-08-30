// Type -> example
const types = {
  Array: [1, 2, 3],
  Object: { key: "value" },
  Function: (param) => {
    console.log(param);
  },
  Null: null,
  Number: 5,
  String: "String",
  Boolean: true,
  Undefined: undefined,
  BigInt: 10n,
  Symbol: Symbol("label"),
};

for (let typename in types) {
  console.log(`Type of ${typename} is ${typeof types[typename]}`);
}
