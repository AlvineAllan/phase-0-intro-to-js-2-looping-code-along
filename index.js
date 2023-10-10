// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, surprise){
   for(let i=0;i<=names.length;i++){
    console.log(`Thank you ${names[i]}for the wonderful surprise gift!`);
    debugger;
   }
   return surprise =[`Thank you, ${names[0]}, for the wonderful surprise gift!`, `Thank you, ${names[1]}, for the wonderful surprise gift!`, `Thank you, ${names[2]}, for the wonderful surprise gift!`];
}
function countDown(){
    let num = 10;
    while(num>(-1)){
        console.log(num--);
    }
  return num;
}