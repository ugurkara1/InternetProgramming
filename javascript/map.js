//boş bir map oluşturma
// let myMap = new Map();

// console.log(myMap);


//Başlangıç değerleri ile map oluşturma
// let myMapWithValues=new Map([
//     ['key1','value1'],
//     ['key2','value2'],
//     ['key3','value3']
// ]);

// console.log(myMapWithValues)


// Anahtar-Değer ekleme ve almada map metodları

// let mymap=new Map();

//anahtar değer ekleme
// mymap.set("name","ugur")
// mymap.set("age",22)

//değeri anahtarlarla alma
// console.log(mymap.get("name"))
// console.log(mymap.size) //map in boyutu
//map içindeki tüm anahtarları almak
// console.log([mymap.keys()])

//map içindeki tüm değerleri almak
// console.log([mymap.values()])

//boş bir set oluşturma  //?Set benzersiz değerlerin korunması ve elemanların sırasız şekilde saklanması için kullanılırken, 
            //?Array sıralı koleksiyonları temsil eder ve elemanların birden fazla kez bulunabileceği dinamik bir yapıya sahiptir.

// let mySet=new Set();

// //başlangıç değerleri ile set oluşturma
// // let mySetWithValues = new Set([1, 2, 3, 4, 5]);
// // console.log(mySetWithValues);

// //değer ekleme ve çıkarma
// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.delete(2)
// console.log(mySet)

// //set boyutları ve elemanları
// console.log(mySet.size)
// console.log(mySet)
// console.log([mySet])

// //set içinde belirli bir  değerin bulunup bulunmadığını konrtol eder

// console.log(mySet.has(1));

// //! LOCALSTORAGE
// //Web depolama mekanizmasıdır.bir sonraki ziyaretlerde bu verilere erişmesine olanak sağlar.key-value çiftleri


// //?veri eklemek(setItem)
// localStorage.setItem("username","uğur")

// //?veri çekmek(getItem)
// var username=localStorage.getItem("username")
// console.log("username: ",username)

// //?veri silmek(removeItem)
// localStorage.removeItem("username")
// console.log("username: ",username)

// //?tüm veriyi temizlemek
// localStorage.clear();
// console.log("username",username)



//!SINIFLAR 17.SLAYT

// class Araba{
//     constructor(marka,model){
//         this.marka=marka;
//         this.model=model;
//     }
//     bilgilerigöster(){
//         console.log(`Marka: ${this.marka}, Model: ${this.model}`);
//     }
// }
// let araba1=new Araba("Toyota","Corolla");
// araba1.bilgilerigöster();

// //?KALITIM
// class Otomobil extends Araba{
//     constructor(marka, model, yakitTipi) {
//         super(marka, model);
//         this.yakitTipi = yakitTipi;
//     }
//     ozellikleriGoster(){
//         console.log(`Yakıt Tipi: ${this.yakitTipi}`);
//     }
// }
// let otomobil1 = new Otomobil("Ford", "Focus", "Benzin");
// otomobil1.bilgilerigöster();
// otomobil1.ozellikleriGoster();

//?Kapsülleme
// class Kullanıcı {
//     #sifre;
//     constructor(ad, sifre) {
//         this.ad = ad;
//         this.#sifre = sifre;
//     }
//     sifreyiGoster() {
//         console.log(`Şifre: ${this.#sifre}`);
//     }
// }

// let kullanici1 = new Kullanıcı("uğur", "gizli123");
// kullanici1.sifreyiGoster();

// function tekrarEdenleriKaldir(arr) {
//     // Set kullanarak tekrar eden elemanları kaldır
//     let uniqueSet = new Set(arr);
    
//     // Set'i diziye dönüştür
//     let uniqueArray = Array.from(uniqueSet);
    
//     // Sonucu döndür
//     return uniqueArray;
// }

// // Örnek kullanım
// let orijinalDizi = [1, 2, 3, 4, 2, 3, 5];
// let yeniDizi = tekrarEdenleriKaldir(orijinalDizi);
// console.log(yeniDizi); // Çıktı: [1, 2, 3, 4, 5]

// function tekrarEdenElemanlar(arr) {
//     let tekrarEden = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j] && !tekrarEden.includes(arr[i])) {
//                 tekrarEden.push(arr[i]);
//             }
//         }
//     }
//     return tekrarEden;
// }

// let tekrarEdenBul = tekrarEdenElemanlar([1, 2, 3, 4, 1, 2, 5]);
// console.log(tekrarEdenBul); // Çıktı: [1, 2]

