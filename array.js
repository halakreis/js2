//Task1
let arr = [1,2,3,4,5];
console.log(arr.slice(0,arr.length).join());

//Task2
let b = []
for(let i=0; i < arr.length ; i++){
 let a = arr[i];
   b= b.concat(a)
}
console.log(b.join());
//Task3
let c = []
for(let i=0; i < arr.length ; i++){
 let a =i+1;
  c = c.concat(a)
}
console.log(c.join())
//Task4
console.log(Array.isArray(arr));
//Task5
let obj = {0: "a", 1:"b", 2:"c", length :3};
console.log(Array.from(obj));
//Task6

//Task7
let arrTwo = [1,2,3];
let arrThree = [4,5,6];
console.log(arrTwo.concat(arrThree));

//Task8 
let arrFour = [1,2,3,4,5,6,[2,4]]
let arrFive = arrFour.slice(0,6);
let arrSix = arrFive.slice(0,2);
let arrSeven = arrFive.slice(4);
let arrEight = arrSix.concat(arrSeven);
console.log(arrEight);

//Task9
let arrNine = [1,2,3,4,5];

let arrTen = arrNine.splice(1,1);
console.log(arrTen)

//Task10
console.log(arr.join())

//Task11
let str = "12345";
let arrEleven = str.split();
console.log(arrEleven[0][4]);

//Task12
console.log(Array.of(1,2,3))
//Task13
let arrTwelve = [[1,2,3,4,5,6],0,3]
arrTwelve.fill(0,0,3)
console.log(arrTwelve.concat(4,5))
//Task14
let arrWhatever= [[1,2,3,4,5,6],1,3];
arrWhatever.copyWithin(2,1,3)
arrWhatever.shift()
console.log(arrWhatever.concat(1,4,5))
//Task15
let arrThirteen = ["apple" , "banana" , "cherry"];
console.log(arrThirteen.sort())
//Task16
console.log(arrThirteen.reverse())








