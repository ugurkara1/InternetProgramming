//Document write ile çıktı verme
// document.write("Hello world <br>");
// document.writeln("Uğur Kara");
// document.write(5)

//?console log metodunu kullanırız
// console.log("Hello world");
// console.log({name:"ugur",surname:"kara"})
// console.clear()

// let a=5;
// let b=10;
// console.log(a+b);

//Alert(Uyarı) popup ile çıktı verme işlemi

// console.log(window)
// let a=10;
// let b=15;
// alert("iki sayının toplamı:  "+ (a+b))
// console.log(window)
// console.error("hata oluştu")

// YORUM SATIRI
/*
?Bu bir bilgilendirme formu
!dikkat
todo:yapılması gerekenler
*test mesaj..
 */

 let str="Merhaba Dünya"
// let str1="Bu bir test cümlesi"
// console.log(str.length);
// console.log(str.charAt(3)) //0 dan başlayarak
// console.log(str.indexOf("dünya"))
// console.log(str1.indexOf("test")) //kelime varsa eğer ilk indeks
// console.log(str.split(" ")) //ayırıcı
// console.log(str.includes("Dün"))
// let currentDate=new Date();
// currentDate.setFullYear(2022);
// console.log(currentDate)
// currentDate.setMonth(5);
// console.log(currentDate)
// console.log(str.includes("Dünya",10))
// let gün="Çarşamba"

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
//         console.log("Geçersiz gün   ")
// }

// let sayi1=parseFloat(prompt("ilk sayıyı gir: "))
// let sayi2=parseFloat(prompt("ikinci sayıyı gir: "))
// if(isNaN(sayi1) || isNaN(sayi2)){
//     console.log("Geçersiz Giriş")
// }else{
//     if(sayi1>sayi2){
//         console.log("ilk sayı büyük")
//     }
//     else if(sayi2>sayi1){
//         console.log("ikinci sayı büyük")
//     }else{
//         console.log("iki sayı birbirine eşittir")
//     }
//     let toplam=sayi1+sayi2
//     console.log("toplam: "+toplam)

//     console.log("ilk sayının mutlak değeri :",Math.abs(sayi1))
//     console.log("ikinci sayının mutlak değeri :",Math.abs(sayi2))

// }

// let metin=prompt("metin giriniz: ")
// let uzunluk=metin.length;
// if(uzunluk<=5){
//     console.log("metnin uzunluğu 5 veya daha az: "+metin.toUpperCase())
// }
// else if(uzunluk>=10){
//     console.log("metnin uzunluğu 10 veya daha fazla :"+metin.toLowerCase())
// }
// else{
//     console.log("metnin uzunluğu 5 ile 10 arasında ")
//     let digermetin="bu diğer metindir"
//     console.log(metin.concat(digermetin))
// }
// function faktoriyel(n){
//     if(n==0|| n==1){
//         return 1;
//     }else{
//             return n*faktoriyel(n-1);
//     }
// }
// let sonuc=faktoriyel(5)
// console.log(sonuc)
// function asal(sayi){
//     if(sayi<=1 || sayi===2){
//         return false;
//     }
//     for(let i=2;i<(sayi);i++){
//         if(sayi%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// let sonuc=asal(2)
// console.log(sonuc)