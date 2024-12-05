//switch case

// let gün="Çarşamba";
// switch(gün){
//     case "Pazartesi":
//     case "Salı":
//     case "Çarşamba":
//     case "Perşembe":
//     case "Cuma":
//         console.log("Hafta içi")
//         break;
//     case "Cumartesi":
//     case "Pazar":
//         console.log("Hafta sonu")
//         break;
//     default:
//         console.log("Geçersiz gün")
         
// }

//todo:Kullanıcıdan iki sayı alıp, bu sayıların büyüklük ilişkisini, toplamını ve mutlak değerlerini hesaplayan program

// let sayi1=parseFloat(prompt("ilk sayıyı giriniz: "))
// let sayi2=parseFloat(prompt("ikinci sayıyı giriniz: "))

// if(isNaN(sayi1) || isNaN(sayi2)){
//     console.log("geçersiz sayı girdiniz")
// }else{
//     if(sayi1>sayi2){
//         console.log("ilk sayı ikinci sayıdan büyüktür")
//     }
//     else if(sayi2>sayi1){
//         console.log("ikinci sayi birinci sayidan büyüktür")
//     }
//     else{
//         console.log("iki sayı birbirine eşitir")
//     }
//     let toplam=sayi1+sayi2
//     console.log("toplam: "+toplam)

//     //mutlak değer hesaplama

//     console.log("ilk sayının mutlak değeri: "+ Math.abs(sayi1));
//     console.log("ikinci sayinin mutlak değeri: "+Math.abs(sayi2));
// }


// let metin=prompt("bir metin giriniz: ")
// //todo:Kullanıcıdan bir metin girişi alarak, bu metnin uzunluğunu kontrol eden bir program yazın. Metnin uzunluğu 5 veya daha az ise, metni büyük harfe dönüştürün. Uzunluğu 10 veya daha fazla ise, metni küçük harfe dönüştürün. Metnin uzunluğu 5 ile 10 arasında ise, metni başka bir metinle birleştirerek çift hale getirin. Bu işlemleri if-else yapısı ve switch-case yapısı kullanarak gerçekleştirin. Ayrıca, Math fonksiyonları ve operatörleri de kullanarak metin uzunluğunu ve birleştirme işlemini gerçekleştirin.
// let uzunluk=metin.length;
// if(uzunluk<=5){
//     console.log("metnin uzunluğu 5 veya daha az")
//     console.log("metnin büyük harfli hali:" + metin.toUpperCase())
// }
// else if(uzunluk>=10){
//     console.log("metnin uzunluğu 10 veya daha fazla")
//     console.log("metnin küçük harfli hali: "+ metin.toLowerCase())
// }
// else if(5<uzunluk<10){
//     console.log("metin 5 10 arasındadır")
//     let digermetin=prompt("diğer metini giriniz: ")
//     console.log("metnin birleştirilmiş hali: "+metin+" "+digermetin)
// }

//?DİZİLER

// let numbers=[1,2,3]
// numbers.push(4);  //[1,2,3,4]
// console.log(numbers)
// numbers.pop()
// console.log(numbers) //sondan siler
// let numbers1=[2,3,4]
// console.log(numbers1)
// numbers1.unshift(1) //başa ekle
// console.log(numbers1)
// numbers1.shift(); //baştan sil
// console.log(numbers1)

// let colors=["red","green","blue"]
// console.log(colors.indexOf("green")) //1
// console.log(colors.includes("yellow")) //false

// let sayi=1;
// do{
//     console.log(sayi)
//     sayi++;
// }
// while(sayi<=5);
// function add(x,y){
//     return x+y
// }
// let result=add(3,4);
// console.log(result)

// function faktoriyel(n){
//     if(n==0 || n==1){
//         return 1
//     }
//     else{
//         return n*faktoriyel(n-1);
//     }
// }
// let sonuc=faktoriyel(5)
// console.log(sonuc)

// function terscevir(metin){
//     return metin.split('').reverse().join('')
// }
// let sonuc=terscevir("merhaba")
// console.log(sonuc)

//selectors -style özellikleri

//classname,id,tag name
