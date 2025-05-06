function samplePromise() {
    return Promise.resolve("Syamsul");
}
const name = await samplePromise();
    console.info(name); // Syamsul