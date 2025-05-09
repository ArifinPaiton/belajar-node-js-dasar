// belajar menggunakan buffer encoding
const buffer = Buffer.from('M. Syamsul Arifin', 'utf-8');

console.info(buffer.toString());
console.info(buffer.toString('hex')); // convert to hex
console.info(buffer.toString('base64')); // convert to base64

const bufferbase64 = Buffer.from('TS4gU3lhbXN1bCBBcmlmaW4=', 'base64');
console.info(bufferbase64.toString('utf-8')); // convert to utf-8
