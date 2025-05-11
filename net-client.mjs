import net from "net";

const client = net.createConnection({ 
    port: 3000, 
    host: "localhost" 
});

client.on("data", (data) => {
    console.info(`Received data from server : ${data.toString()}`);
});

setInterval(() => {
    client.write("Syamsul\r\n");
    // client.write(`${process.argv[2]}\r\n`);
}, 2000);
