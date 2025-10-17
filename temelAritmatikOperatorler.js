document.writeln("<h3>BASİT HESAP MAKİNESİ </h3>"+ "<br>") ;
let sayi1=17;
let sayi2=15;
let toplam=sayi1 + sayi2;
let cikarma= sayi1 - sayi2;
let carpma= sayi1 * sayi2;
let bolme= sayi1 / sayi2;
let mod= sayi1 % sayi2;
let ust_alma= sayi1 ** sayi2;
document.writeln("BİRİNCİ SAYI :"+ sayi1 + "<br>"+ 
    "İKİNCİ SAYI:"+ sayi2 + "<br>" +
    "TOPLAMA İŞLEMİ SONUCU: "+ toplam + "<br>" +
    "ÇIKARMA İŞLEMİ SONUCU: "+ cikarma + "<br>" +
    "ÇARPMA İŞLEMİ SONUCU:"+ carpma + "<br>" +
    "BÖLME İŞLEMİ SONUCU: "+ toplam + "<br>" +
    "MOD ALMA İŞLEMİ SONUCU: "+ mod + "<br>" +
    "ÜST ALMA İŞLEMİ SONUCU: "+ ust_alma + "<br>" +
    "AŞAĞI YUVARLAMA İŞLEMİ SONUCU : " +Math.floor(sayi1) + "<br>" +
    "YUKARI YUVARLAMA İŞLEMİ SONUCU : " +Math.ceil(sayi1) + "<br>" +
    "YAKINA YUVARLAMA İŞLEMİ SONUCU : " +Math.round(sayi1) + "<br>" );


