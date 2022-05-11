import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Arsenius\n")
writer.write("Anom\n")
writer.write("Permadi\n")
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) =>{
    console.info(data.toString());
});