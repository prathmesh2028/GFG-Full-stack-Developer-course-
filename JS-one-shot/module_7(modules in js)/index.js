// Add "type": "module" in package.json
//if not running
const modules = require("./packages");

modules.hello("prathmesh badhe");
modules.sum(9,8,7);
modules.greet("anything");

//using destructuring with the modules
const {sum,greet,hello} = require("./packages");
hello("prathmesh badhe");
sum(9,8,7);
greet("anything");


//and yeah that's all :)





import all from "./packages";
all.hello("pb")