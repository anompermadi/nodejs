import {Console} from "console";
import fs from "fs";
import { stderr } from "process";

const file = fs.createWriteStream("application.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hi All");
log.error("Hi All");

const person = {
    firstName: "Arsenius",
    lastName: "Anom",
}

log.table(person);
