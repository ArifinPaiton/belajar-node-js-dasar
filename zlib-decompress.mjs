import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync('zlib-compress.mjs.txt'); // baca file hasil kompresi
console.info(source.toString()); // kita tampilkan isi file yg belum di dekompres ke dalam console

const result = zlib.gunzipSync(source); // gzip/gunzipSync untuk mendekompres file
console.info(result.toString()); // kita tampilkan hasil dekompresi ke dalam console
