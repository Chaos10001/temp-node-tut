const _ = require('lodash');

const items=[1,[2,[2,[4]]]]

const newitems=_.flattenDeep(items)
console.log(newitems);
