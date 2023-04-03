var getAge=function(name,birthDate){
    const currentDate=new Date();
    const year=currentDate.getFullYear()-birthDate.getFullYear();
   

    return `Welcome ${name},Your age is:${year}`;
}

module.exports={
   getAge:getAge
};