import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync('zlib-compress.mjs');
const result = zlib.gzipSync(source); // gzip/gzipSync untuk mengompres file

fs.writeFileSync('zlib-compress.mjs.txt', result); // kita simpan hasil kompresi ke dalam file