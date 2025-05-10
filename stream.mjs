import fs from 'fs';

// stream untuk membuat file
// createWriteStream() itu kalau filenya sudah ada, maka akan ditimpa/di tulis ulang
// jika filenya belum ada, maka akan dibuat
const writer = fs.createWriteStream('target.log');

// untuk mengirim datanya, bisa berupa string atau buffer
writer.write('M\n'); // \n = enter/newline
writer.write('Syamsul\n');
writer.write('Arifin\n');
writer.end();

// stream untuk membaca file
// createReadStream() itu untuk membaca file
const reader = fs.createReadStream('target.log');

// untuk membaca data dari stream
// reader.read();

// untuk mendengarkan event data
reader.addListener('data', (data) => {
  console.info(data.toString());
});