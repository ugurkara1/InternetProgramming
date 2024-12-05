/*
1-Bakiye görüntüleme
2-Para çekme
3-Para yatırma
4-Çıkış

*/
let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme " + yeniSatir +
    "2-Para Çekme" + yeniSatir +
    "3-Para Yatırma" + yeniSatir +
    "4-Çıkış" + yeniSatir +
    "lütfen kullanılabilir bir değer seçiniz";

let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("Bakiyeniz: " + bakiye);
        break;
    case "2":
        let cekilecektutar = Number(prompt("çekmek istediğiniz tutar:"));
        if (cekilecektutar <= bakiye) {
            bakiye -= cekilecektutar;
            alert("Kalan bakiye: " + bakiye);
        } else {
            alert("bakiyenizden fazla para çekemezsiniz");
        }
        break;
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz: "));
        bakiye += yatirilacakTutar;
        alert("Güncel Bakiyeniz: " + bakiye);
        break;
    case "4":
        alert("sistemden çıkış yapıldı")
    default:
        console.log("Lütfen 1-4 arasında bir değer giriniz: ");
        break;
}
