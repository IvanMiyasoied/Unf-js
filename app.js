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



const object = {
    young: [
      { name: "Misha", age: 20 },
      { name: "Olha", age: 26 },
      { name: "Ira", age: 22 },
      { name: "Ivan", age: 21 },
    ],
    adult: {
      more30: [
        { name: "Evgen", age: 40 },
        { name: "Marina", age: 36 },
        { name: "Oleh", age: 31 },
        { name: "Ivan", age: 36 },
      ],
      more40: [
        { name: "Sergey", age: 42 },
        { name: "Inga", age: 46 },
        { name: "Ira", age: 41 },
        { name: "Igor", age: 46 },
      ],
    },
    old: {
      more60: [
        { name: "Stepan", age: 67 },
        { name: "Victor", age: 61 },
      ],
    },
  };

  
  
  function getAveregeOrAll (object,value,maxAge) {
      let arr = []
      for (i=0; i<object.young.length;i++) {
        arr.push(object.young[i].age)
      }
      return arr

  }

  getAveregeOrAll(object);
  console.log(getAveregeOrAll(object));