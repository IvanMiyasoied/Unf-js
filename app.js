// function factorial(n) {
//     if (n === 0 || n === 1) 
//         return 1;
    
//     for (i = n-1; i >= 1; i--) {

//         n*=i;
//     }
    
//     return n;
// }

// factorial(5);
// console.log(factorial(5));



// function factorial(n) {
//     if ( n < 0)
//       return -1; 
//       else if ( n == 0 )
//       return 1;
//       else {
//         return (n * factorial(n-1));
//       } 
// }

// factorial(5);
// console.log(factorial(5));



// arr = [1,2,3,4,5]

// function getSum(arr) {
//     let sum = arr.shift();

//     if (arr.length !==0) {
//         sum += getSum(arr);
//     }
//     return sum
// }

// getSum(arr);
// console.log(getSum([1,2,3,4,5]));




// let getGlob = () => {
//     console.log(window);
// };

// if ( !window.Promise) {
//     window.Promise = ...
// }

// getGlob();



// const object = {
//     young: [
//       { name: "Misha", age: 20 },
//       { name: "Olha", age: 26 },
//       { name: "Ira", age: 22 },
//       { name: "Ivan", age: 21 },
//     ],
//     adult: {
//       more30: [
//         { name: "Evgen", age: 40 },
//         { name: "Marina", age: 36 },
//         { name: "Oleh", age: 31 },
//         { name: "Ivan", age: 36 },
//       ],
//       more40: [
//         { name: "Sergey", age: 42 },
//         { name: "Inga", age: 46 },
//         { name: "Ira", age: 41 },
//         { name: "Igor", age: 46 },
//       ],
//     },
//     old: {
//       more60: [
//         { name: "Stepan", age: 67 },
//         { name: "Victor", age: 61 },
//       ],
//     },
//   };

//    let maxAge = 100;
   
//    let result = getAveregeOrAll(object);
  
//   function getAveregeOrAll (object,value,maxAge) {
//     let arr = []
//       for (i=0; i<object.young.length;i++) {  
//         arr.push(object.young[i].age)
//       }
//       for (i=0; i<object.adult.more30.length;i++) {
//         arr.push(object.adult.more30[i].age)
//       }
//       for (i=0; i<object.adult.more40.length;i++) {
//         arr.push(object.adult.more40[i].age)
//       }
//       for (i=0; i<object.old.more60.length;i++) {
//         arr.push(object.old.more60[i].age)
//       }
      
//        value = Math.round(arr.reduce((acc,current) => acc + current,0)/arr.length) + " " + "avg age" + " " + arr.length + " " + "num of cands"

//       return  arr,value
//   }

  

//   let checkAge = (result) => {
//     for (i = 0; i < result.length;i++) {
//       if(result[i] >= maxAge) {
//         console.log("too old");
//       }
      
//     };

//   }
 
  
//   getAveregeOrAll(object);
  
//   console.log(getAveregeOrAll(object));




// let sayHi = setInterval(() => setTimeout(alert("Hi!"),1500),2000);

// setTimeout(() => {clearInterval(sayHi); alert("stop");},10000)



//  function gcd(a,b) {
//   if (b== 0) {
//     return a 
//   } else {
//     return gcd(b,a % b)
//   }
//  }

//  gcd(12,8);
//  console.log(gcd(12,8));


let currDate = () => window.Date;

currDate();

console.log(currDate);