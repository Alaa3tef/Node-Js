var functions=require('./Q1');
console.log(functions.sum(2,4));
console.log(functions.sub(2,4));
console.log(functions.multi(2,4));

try{
    console.log(functions.sum('A',4));
}
catch(error){
    console.error(error.message)
};