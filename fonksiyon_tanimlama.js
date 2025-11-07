function selamVer(isim)
{
    const mesaj="Hoş Geldiniz "+ isim;
    return mesaj;
}
let selamlama=selamVer("AZRA");
document.writeln("<u>Fonksiyon Bildirimi Örneği</u><br>");
document.writeln(selamlama + "<BR> <BR>");



const carpmaIslemi=function(sayi1,sayi2)
{
    const sonuc=sayi1*sayi2;
    return sonuc;
}
let hesapSonucu=carpmaIslemi(7,3);
 document.writeln("<U>Fonksiyon Expression Örneği</u> <br>");
 document.writeln("İşlem Sonucu: "+ hesapSonucu+ "<br><br>");


 const farkAl=(sayi1,sayi2)=>sayi1-sayi2;
 let farkSonuc=farkAl(25,10);
 document.writeln("<U>Ok Foksiyon Örneği</u> <br>");
 document.writeln("İşlem Sonucu: "+ farkSonuc+ "<BR> <BR>");