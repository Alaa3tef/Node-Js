var fs=require('fs');
fs.writeFile('info.txt','Alaa',(err)=>{
    if(err)throw err;
    console.log('The File Saved Successfully');
});