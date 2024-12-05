//javascript senkron çalışan bir programlama dilidir.
//?ne zaman asenkron çalışır

/*
    1-timing işlemlerinde
    2-event(olay)
    3-Http isteklerinde 


*/

// console.log("Enes")

// setTimeout(() => {
//     console.log("Süre doldu ve çalıştı")
// }, 1000);

// console.log("Bayram")

//!PROMİSE

// const check = true; // veya koşulunuzun değerine göre true veya false olarak ayarlayın

// const myPromise = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("promise başarılı"); // Promise başarılı şekilde çözülür
//     } else {
//         reject("promise başarısız"); // Promise başarısız olur
//     }
// });

// console.log(myPromise); 


// let myPromise=new Promise(function(resolve,reject){
//     //asenkron islem
//     setTimeout(function(){
//     let success=true
//     if(success){
//         resolve("işlem tamamlandı")
//     }
//     else{
//         reject("işlem başarısız")
//     }
//     }, 2000);
// })  

// myPromise
//     .then(function(result){
//         console.log(result)
//     })
//     .catch(function(error){
//         console.error(error)
//     })

//?Async ve Await: 
//ES2017 (ES8) ile gelen async ve await ifadeleri, asenkron programlamayı daha lineer ve okunabilir hale getirmek için kullanılır.

async function myAsyncFunction(){
    console.log("1.işlem başlatıldı")
    //asenkron işlemi await kullanarak bekletme
    try {
        let result=await new Promise((resolve,reject) =>{
            setTimeout(() => {
                let success=true;
                if(success){
                    resolve("ikinci işlem başlatıldı")
                }else{
                    reject("ikinci işlem başarısız")
                }
            }, 2000);
        })
        console.log(result)
        console.log("3.işlem devam ediyor")
    } catch (error) {
        console.error(error)
    }
}
myAsyncFunction();

