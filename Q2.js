var readline =require('readline');
var fs= require('fs');

var r1=readline.createInterface({
    input:fs.createReadStream(`data.json`),
    crlfDelay:Infinity
});

r1.on('line',(line) => {
    console.log(line);
});