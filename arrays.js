var arr = [];
arr.push(function(){
console.log("one")
});
arr.push(function(){
console.log("TWO")
});
arr.push(()=>{
console.log("THree")
});

arr.forEach((fun)=>fun());