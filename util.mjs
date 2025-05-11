import util from 'util';

const firtsName = 'Syamsul';
const lastName = 'Arifin';

console.info(`Hello ${firtsName} ${lastName}`);
console.info(util.format('Hello %s %s', firtsName, lastName)); // %s untuk menrubah ke string

const person = {
  firstName: 'Syamsul',
  lastName: 'Arifin',
  age: 20,
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format('Person : %j', person)); // %j untuk menrubah ke json

