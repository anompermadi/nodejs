function samplePromise(){
    return Promise.resolve("Anom Permadi");
}

const name = await samplePromise();
console.info(name);

// using .mjs then await already known in async function
