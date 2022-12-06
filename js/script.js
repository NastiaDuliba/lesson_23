"use strict"

//Оператори JS
//Варіант 1
console.log('35' + - "23")
console.log(typeof ('35' + - "23"));
//Варіант 2
console.log("35" * "22");//// Оператор множення перетворює string на Namber
//Варіант 3
//console.log('558' > 22++);

//Варіант 4
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
//Верне 0
//Варіант 5
console.log(!false && 11 || 18 && !'');
//поверне 11
//Варіант 6
//let name = 0;
//console.log(name ?? "Без імені");
//поверне 0


////IF ELSE
//Варіант 1
if(1 === "1"){
   console.log( 'Правда')
}else{
   console.log('Не правда');
};////False
//Варіант 2
if(5 == "5"){
   console.log( 'Правда')
}else{
   console.log('Не правда');
};//true
//Варіант 3
let message = (92 > '11' && 58 < 100) ? 'Правда': 'Не правда';
console.log(message);
//true
//Варіант 4
if(0){
   console.log('Не правда');
}else if (" ") {
   console.log( 'Правда');
}//true




















////ЦИКЛИ
//задача №1
//1.1 While 
let num = 0;
while(num < 5){
   num++;
   console.log(num);  
}
let number = 1;
while(number < 5){
   console.log(number);  
   number++;
}
//1.2 do while
let numWhile = 1;
do{
   console.log( numWhile);
   numWhile++
}while( numWhile < 6);






//1.3 for
for(let num = 1; num < 6 ; num++) {
   console.log(num);
}

let numFor = 0;
for(; numFor < 5 ; ) {
   numFor++
   console.log(numFor);
   }

//1.4 Break
for(let num = 1; num < 10; num++){
   console.log(num);
   if(num == 5 ) break;
}

//1.5 Continue
for(let num = 0; num < 6; num++){
   if(num == 0 ) continue;
   if(num == 6 ) continue;
   console.log(num);
}





//1.6 Miтки
firstNumb:
for(let num = 0; num < 1; num++){
   for(let size = 1; size < 6; size++){
      if(size == 6){
         break firstNumb
      }
      console.log(size);    
   }
}

// задача №2
//Не буде 0 адже в цьому випадку 0 == false
//let num = 8;
//while(num){
//   console.log(num);
//   num--;
//}
//задача №3
//let num = 0;
//while(num <3){
//   num++;
//   console.log(`число ${num}`);
 
//}




// Задача №4
numFor:
for(let num = 0; num < 2; num++){
   for(let size = 0; size < 3; size++){
      if(size == 1) {
         break numFor

      }
      console.log(size);
   }
}








////////ТИП ДАННИХ NUMBER

//задача №1
let numMath = 1.005 + Number.EPSILON;
let numRound = Math.round(numMath * 100) / 100;
console.log(numRound);
//задача №2
let value = "135.58px"
console.log(parseFloat(value));
//задача №3
let numNuN = 25 + "Женя";
if (numNuN  !== NaN){
   console.log( "Це Nan");
}
console.log( isNaN(numNuN));
console.log (NaN === NaN);

//задача №4
console.log( Math.max(10, 58, 39, -159,0 ));
console.log( Math.min(10, 58, 39, -159,0 ));
//задача №5
let numFloor = 58.858;
console.log( Math.floor (numFloor));

/////Рядки
//задача №1
//let fls = "Фрілансер";
//let text = 'Привіт я ${fls}';
//console.log(text);
//задача №2
let text = 'Фрілансер'
console.log(text.indexOf('н'));
console.log(text[5]);

////задача №3
//let textNum = 123 + "456"
//console.log(textNum);
////123456
//задача №4
let textUp = 'фрілансер';
console.log(textUp.toUpperCase());
//задача №5
let textIn = 'фрілансер';

console.log(text.slice(3, 6));
//задача №6
let textTr = 'фрілансер';
console.log(textTr.includes('лан', 4));