var fs=require('fs');
fs.unlink('info.txt',(err)=>{
    if(err)throw err;
    console.log('The File Deleted Successfully');
});