import {threadId, parentPort} from "worker_threads";

parentPort.on("message", (message) => {
    for (let i = 0 ; i < message; i++) {
        console.info(`Thread ${threadId} send massage ${i}`);
        parentPort.postMessage(i); // kirim balik perulangannya ke main thread
    }
    parentPort.close(); // tutup worker/port setelah selesai
});