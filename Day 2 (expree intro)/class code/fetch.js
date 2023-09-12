const Result = fetch('http://localhost:2345/data',{
    method:"Get",
}).then(response).then(response.json())
console.log(Result)