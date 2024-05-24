// const { resolve } = require("styled-jsx/css");

// //
// const makePayment = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let err = true;
//       if (!err) resolve();
//       else reject("Payment Error");
//     }, 5000);
//   });
// };

// const sendEmail = () => {
//   console.log("Email: Order has been processed");
// };

// const sendMessage = () => {
//   console.log("Message: Order has been processed");
// };

// makePayment()
//   .then(() => sendEmail())
//   .then(() => sendMessage())
//   .catch((err) => console.log(err));

//   //Promise
//   const f1 = (v) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (v>0) resolve(5)
//         else reject("Something went wrong");
//       }, 5000);
//     });
//   };

//   const f2 = (x) => {
//     console.log(x + 6);
//   };

//   f1(1)
//     .then((a) => f2(a))
//     .catch((err) => console.log(err));

//callback
//   const f1 = (fnc) => {
//     setTimeout(() => {
//       fnc(5);
//     }, 5000);
//   };
//   const f2 = (a) => {
//     console.log(a + 10);
//   };
//   f1(f2);

////////////////////////
//asynchronous : occuring at the same time
//   const f1 = () => {
//     setTimeout(()=>{
//         return 5
//     },5000)
//   };
//   const f2 = (a) => {
//     console.log(a + 10);
//   };
//   let n1 = f1(); // if takes 5 seconds
//   f2(n1); // then this will throw an error

function fn1() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

fn1()
  .then(() => console.log("GO"))
  .catch((err) => console.log("Error Caught"));

// function fact(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }

// function ans(n) {
//   return new Promise((resolve, reject) => {
//     if (n == 1) {
//       reject(n);
//     } else {
//       resolve(n);
//     }
//   });
// }

// ans(1)
//   .then((x) => console.log(fact(x)))
//   .catch(() => console.log("Answer will be same"));
