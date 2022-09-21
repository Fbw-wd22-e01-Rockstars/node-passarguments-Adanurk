import stars from "./stars.js";

const args = process.argv.slice(2);
console.log(args);

console.log(Boolean(parseInt(args[0])));

stars(parseInt(args[0]), args[1]);
