import https from "https";

const endpoint = "https://hookb.in/RZaJPO1dO2uQBJEykG7P";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) =>{
    response.addListener("data", (data)=>{
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Arsenius",
    lastName: "Anom",
})

request.write(body);
request.end();
