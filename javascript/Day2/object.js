const obj = {
name : "Vaibhav",
name : "aman",
age: 20,
};
console.log(obj);
const namee= obj.name;
console.log(namee);

obj.country= "India";

const key = "country";
console.log(obj[key]);

obj.country = "america";
console.log(obj[key]);
delete obj.country;