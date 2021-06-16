function lotSize() {
  let balance = document.getElementById("balance").value;
  let risk = document.getElementById("risk").value;
  let stopLoss = document.getElementById("stopLoss").value;
  if (balance === "" && risk === "" && stopLoss === "") {
    document.getElementById("lots").innerHTML = "Please fill in all fields";
  } else {
    let size = (((risk / 100) * balance) / (stopLoss * 10)).toFixed(02);
    document.getElementById("lots").innerHTML = size;
  }
}

const element = document.getElementById("btn");

function reset() {
  document.getElementById("balance").value = "";
  document.getElementById("risk").value = "";
  document.getElementById("stopLoss").value = "";
}

// function peek(stack){
//     return stack[stack.length-1]
// }

// function isBalance(str){
//     let stack = []
//     stack.push()
//     stack.pop()
//     for(let i = 0;i<str.length; i++){
//         let letter = str.charAt(i)
//         if (letter === '('){
//             stack.push(letter)
//         } else if (letter === ")"){
//             if (peek(stack) === '('){
//                 stack.pop()
//             } else {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// console.log(isBalance("((()))"))
// console.log(isBalance("(())"));
// console.log(isBalance("()"))
// console.log(isBalance("(((((())))))"))

// console.log(isBalance(")"))
// console.log(isBalance("("))
// console.log(isBalance(")("))
