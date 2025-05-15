import cluster from 'cluster';
import http, { request } from 'http';
import os from 'os';
import process from 'process';

if(cluster.isPrimary){
    console.info(`primary : ${process.pid}`);
    // jalankan worker sesuai dengan banyak core pada komputer
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    // ini untuk melihat sudah worker yang exit/mati
    cluster.addListener("exit", (worker) => {
        console.info(`Worker-${worker.id} is exit`);
        cluster.fork(); // buat ngejalankan workernya lagi kalau ada yang worker mati
    });
}

if(cluster.isWorker){
    console.info(`worker : ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        response.exit();
    });

    server.listen(3000);
}