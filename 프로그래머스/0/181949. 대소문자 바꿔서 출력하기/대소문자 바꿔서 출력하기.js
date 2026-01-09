const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split("");
 str.forEach((i,idx)=>
           { 
     if(i === i.toUpperCase())
     {
      return str[idx] = i.toLowerCase()
 }
  else {  
      return str[idx] = i.toUpperCase()
   };
})
console.log(str.join(""));
});