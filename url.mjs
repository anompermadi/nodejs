import {URL} from "url";

const anom = new URL("https://broanom.com/learn?class=nodejs");

console.info(anom.toString());
console.info(anom.href);
console.info(anom.protocol);
console.info(anom.host);
console.info(anom.pathname);
console.info(anom.searchParams);