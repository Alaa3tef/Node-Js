var fs = require('fs');
var date = await fs.promises.readFileSync('data.json','utf8');
var jsonData=JSON.parse(date);
console.log(jsonData);