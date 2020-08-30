// prevent key collisions in object
let countSymbol = Symbol("count");
let originalObject = { [countSymbol]: 0 };
let proxyObject = new Proxy(originalObject, {
  set(target, prop, value) {
    if (target[prop] !== value) {
      originalObject[countSymbol]++;
      target[prop] = value;
    }
    return true;
  },
});

console.log(proxyObject);
const sym2 = Symbol("count");
proxyObject[sym2] = 5;
proxyObject[sym2] = 10;
proxyObject[sym2] = 15;
console.log(proxyObject);
console.log(proxyObject[countSymbol]);
