const name = "anshu"
const repoCount = 5

// console.log(name + repoCount + " value")  //outdated tarika to concat str

console.log(`Hello muy name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anshu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));

const newStringOne = "     anshu     "
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(gameName.replace('a', 'b'))