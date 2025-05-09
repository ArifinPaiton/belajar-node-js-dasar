// ini versi callback dan promises
import readline from "readline";
// import rlpromis from "readline/promises"; //kalau mau pakai promises
import process from "process";

// versi callback
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Siapa nama anda? ", (name) => {
    console.info(`Halo ${name}`);
    input.close();
});

// versi promises
/*const rlinput = rlpromis.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const nama = await rlinput.question("Nama anda? ");
console.info(`Halo ${nama}`); */