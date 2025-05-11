import https from 'https';

const endpoint = 'https://eok8nx5m946gsba.m.pipedream.net';
const request = https.request(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
}, (response) => {
    response.on('data', (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    fistName: 'M Syamsul',
    lastName: 'Arifin',
});

request.write(body);
request.end();