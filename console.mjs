import {Console} from "console";
import fs from "fs";

const file = fs.createWriteStream("aplication.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello world");
log.error("This is an error message");

const person = {
    name: "John Doe",
    age: 30,
    city: "New York",
};

log.table(person);