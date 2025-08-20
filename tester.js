// function coinFlip () {
//     return new Promise ((resolve,reject) =>
//     setTimeout(() => {
//         let flip = Math.random();
//         if (flip < 0.5) {
//             resolve("Heads")

//         }   else {
//             reject("Tails")
//         }
//     }, 1000)
       
// )}

// coinFlip()
//     .then((result) => {
//         console.log("You got: " + result)
//     })
//     .catch((error) => {
//         console.log("It failed with: " + error)
//     });

// function doubleNum (num) {
//     return new Promise ((resolve, reject) =>
//         setTimeout(() => {
//             if (num === "Hello") {
//                 reject("NaN");
//             } else {
//                 resolve(num * 2);
//             }
//         }, 500))
// }

// doubleNum(4)
//     .then((result) => {
//         console.log(result);
//         })
//     .catch((error) => {
//         console.log(error);
//     });

//     doubleNum("Hello")
//     .then((result) => {
//         console.log(result);
//         })
//     .catch((error) => {
//         console.log(error);
//     });

// Write code below this line 

// async function squareNumber(number) {
//  return(number ** 2);
// }

// squareNumber(4)
//   .then((result) => {
//   console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// // Write code above this line

async function delay(ms) {
    return(setTimeout(() => {
        return("...");
    },ms))
}

async function run() {
    console.log("Starting...");
    await delay(1000);
    console.log("Done!")
}

run();