import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.info(request.url);

  if (request.method === "POST") {
    request.addListener("data", (data) => {
        response.setHeader("Content-Type", "application/json"); // setting headernya menjadi JSON
        response.write(data);
        response.end();
    })
  } else {
    if (request.url === "/syamsul") {
      response.write("Hello Syamsul");
    } else {
      response.write("Hello HTTP server");
    }
    response.end();
  }
});

server.listen(3000);
