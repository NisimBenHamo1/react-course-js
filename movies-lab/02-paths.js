import { loadData } from "./load.js";

const data = loadData();

console.log(data.updatedAt);
console.log(data.movies[0].title);
console.log(data.movies[0].director.name);