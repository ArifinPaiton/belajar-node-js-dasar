// ini yang versi Promise
import timers from "timers/promises";

// console.info(new Date());
// const name = await timers.setTimeout(5000, "Syamsul");
// console.info(new Date());

// console.info(name);

// untuk yang setInterval
for await(const startTime of timers.setInterval(1000)) {
    console.info(`Start time at ${new Date()}`);
    // console.info(time);
}