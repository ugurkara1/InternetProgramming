function selamver(){
    var selam="herkse selam"; //function scope
    console.log(selam);
}
selamver();
//let/const:block scope özelliğine sahiptir
//let ve const arası fark
//const-değişmez
// const a=10;
// a=15
// console.log(a) //değişmez

// let b=5
// b=7
// console.log(b)

const user={
    username:"ugur",
    password:"123"
}
user.username=("ugurkara")
console.log(user);