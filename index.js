//Will not work since node thinks we are importing a module and file:
//require("test-import.js");

//const x = require("./test-import.js");
const testImport = require("./test-import.js");

const fs = require("fs");
//console.log(fs);

console.log("Here's it's working");


//console.log(x);
console.log(testImport.x);

//Syncronization meaning we wait for this to finish before continuing.
//const readme = fs.readFileSync("readme.txt", "utf8");
//console.log(readme);

//Asyncronization meaning we do not wait for this to finish before continuing.
/*
fs.readFile("readme.txt", "utf8", (err, data) => {
	if(err)  console.log(err);
	console.log(data);
});
*/
console.log("Next line of code");



//node .    will run the index.js since we wrote in the package.json that the main file is the index.js sp node . will run this file when this command is used.
//fs is a core module with you don't install but it comes with node. 



const p1 = new Promise((resolve, reject) => {
	fs.readFile("readme-2.txt", "utf8", (err, data) => {
	if(err)  reject(err);
	console.log("readme2 read");
	resolve("readme2 read");
	});
});

const p2 = new Promise((resolve, reject) => {
	fs.readFile("readme.txt", "utf8", (err, data) => {
	if(err)  reject(err);
	console.log("readme read");
	resolve("readme read")
	});
});

Promise.all([p1,p2])
.then( () => { console.log("Both files have been read");

});


console.log("Last line of code");