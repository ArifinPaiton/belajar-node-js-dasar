//import fs from 'fs'; // ini untuk yg synchronous
import fs from 'fs/promises'; // ini untuk yg asynchronous

const buffer = await fs.readFile('file-system.mjs');
console.log(buffer.toString());

await fs.writeFile('temp.txt', 'ini hasil dari kode fs.WriteFile di file-system.mjs'); // ini untuk menulis file