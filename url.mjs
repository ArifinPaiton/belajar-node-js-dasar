// ini modul URL di nodeJS
import {URL} from "url";

const pzn = new URL("https://www.programerzamannow.com/belajar?kelas=nodejs");

// megubah host/alamat URL
pzn.host = "www.pzn.com";
// menambah search params
pzn.searchParams.append("status", "premium"); // append untuk menambah search params

console.info(pzn.toString()); // toString atau href itu sama
console.info(pzn.href);
console.info(pzn.protocol); // https:
console.info(pzn.host); // www.programerzamannow.com
console.info(pzn.pathname); // /belajar
console.info(pzn.search); // ?kelas=nodejs
console.info(pzn.searchParams); // URLSearchParams { 'kelas' => 'nodejs' }