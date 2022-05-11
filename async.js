function samplePromise(){
    return Promise.resolve("Anom");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();

