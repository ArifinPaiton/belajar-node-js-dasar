const buffer = Buffer.from("M Syamsul Arifin"); // membuat buffer dari string

console.info(buffer); // menampilkan buffer berupa byte
console.info(buffer.toString()); // mengubah dari byte ke string

buffer.reverse(); // membalikkan urutan byte
console.info(buffer.toString()); // menampilkan buffer yang sudah dibalik dalam bentuk string
