const buffer = Buffer.from("Arsenius Anom Permadi", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QXJzZW5pdXMgQW5vbSBQZXJtYWRp", "base64");
console.info(bufferBase64.toString("utf8"));

