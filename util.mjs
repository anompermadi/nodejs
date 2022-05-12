import util from "util";

const firstName = "Anom";
const lastName = "Permadi";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hi %s %s", firstName, lastName));

const person = {
    firstName: "Anom",
    lastName: "Permadi"
};

console.info(`Person: ${JSON.stringify(person)}`);
console.inffo(util.format("Person : %j", person));

