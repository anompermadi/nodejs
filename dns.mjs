import dns from "dns/promises";

const address = await dns.lookup("broanom.com");
console.info(address.address);
