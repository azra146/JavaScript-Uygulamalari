// let kullanici_adi=String(prompt("KULLANICI ADINIZI GİRİN: "));
// let sifre=Number(prompt("ŞİFRENİZİ GİRİN: "));
// if(kullanici_adi=="admin"&& sifre==1234)
// {
//     alert("GİRİŞ BAŞARILI. ");
// }
// else
// {
//     alert("HATALI GİRİŞ YAPTINIZ. ");
// }




// let sınav1=Number(prompt("BİRİNCİ SINAV NOTU GİRİNİZ: "));
// let sınav2=Number(prompt("İKİNCİ SINAV NOTU GİRİNİZ: "));
// let sınav3=Number(prompt("ÜÇÜNCÜ SINAV NOTU GİRİNİZ: "));
// let ortalama=((sınav1*20)/100 + (sınav2*30)/100 + (sınav3*50)/100);
// if(ortalama>60)
// {
//     alert("DERSTTEN GEÇTİNİZ.");
// }
// else
// {
//     alert("DERSTTEN KALDINIZ.");
// }


let kilo = Number(prompt("KİLONUZU GİRİN: "));
let boy = Number(prompt("BOYUNUZU GİRİN: "));
let bki = kilo / (boy * boy);
if (bki <= 18.5) {
    alert("İDEAL KİLONUN ALTINDASINIZ.");
}
else if (18.5 <= bki >= 24.9) {
    alert("İDEAL KİLODASINIZ.");
}
else if (25 <= bki >= 29.9) {
    alert("İDEAL KİLONUN ÜSTÜNDESİNİZ.");
}
else if (30 <= bki >= 39.9) {
    alert("OBEZ.");
}
else {
    alert("İDEAL KİLONUN ÇOK ÜZERİSİNİZ.");
}