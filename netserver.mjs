import net from "net";
import { hostname } from "os";

const server = net.createServer((client)=>{
    console.info("Client connected");

    client.addListener("data", (data)=>{
        console.info(`Receive data ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    })
});

server.listen(3000, "localhost");