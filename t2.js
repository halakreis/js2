//Elzero Loop
//Task1

let start = 10;
let end = 100;
let exclude = 40;


for(let i=start; i <= end; i+=start){
    console.log(i)
}
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

//Task2
let startTwo = 10;
let endTwo = 0;
let stop = 3;

for(let j = startTwo; j >= 3; j--){
    if(j < 10){
        console.log("0"+j)
    }
    else{
        console.log(j)
    }
}
// // Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

//Task3
let startThree = 1;
let endThree = 6;
let breaker = 2;

for(let k = startThree; k <= endThree; k++){
    console.log(k)
    console.log("-- " + breaker)
    console.log("-- " + breaker * breaker)
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

//Task4
let index = 10;
let jump = 2;

for( let m = index; m > jump ; m-=jump){
    console.log(m)
}

// // Output
// 10
// 8
// 6
// 4

// //Task5



// //Task6



//Task7
let startFive = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = startFive; i < mix.length; i++) {
    if (mix[i] == 1 || typeof(mix[i]) == "string"){
        continue;   
    }
    else{
      console.log(mix[i]);
    }
        
    }


// // Output
// 2
// 3
// 4

// //Task8
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let indexTwo = 0;
// let counter = 0;
// while (indexTwo<friends.length){

// if(friends[indexTwo][counter] == "A" || typeof(friends[indexTwo]) == "number") {
//     continue;
// }
// else{
//     console.log(friends[indexTwo])
// }    
// indexTwo = indexTwo + 1;
// }

// // Output
// "1 => Sayed"
// "2 => Mahmoud"