//ref https://nodejs.org/dist/latest-v12.x/docs/api/
var util = require("util");
util.log("Hello world");
util.log(util.format("%s,%s","one","two","three"));

util.log(util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 }));
