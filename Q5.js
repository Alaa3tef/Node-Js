
var fs=require('fs');
var date=fs.readFileSync(`data.json`);
var jsonData=JSON.parse(date);
console.log(jsonData);