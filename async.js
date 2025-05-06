function samplePromise() {
    return Promise.resolve("Syamsul");
}

async function run() {
    const name = await samplePromise();
    console.info(name); // Syamsul
}

run();