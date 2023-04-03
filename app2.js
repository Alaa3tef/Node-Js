var Customer=require('./Q2');
try{
    var getString=Customer.getAge('Mayar',new Date(2000,5,1));
    console.log(getString);
}
catch(error){
    console.error(error.message)
};