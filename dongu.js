// document.writeln("<u>0'dan 10'a kadar olan çift sayılar: </u>" + "<br>");
// for(let i=0; i<=10; i+=2)
// {
//     document.writeln(i ) ;
// }"<br>"
// document.writeln("<br> <u>0'dan 10'a kadar olan tek sayılar: </u>" + "<br>");
// for(let j=1; j<10; j+=2)
// {
//     document.writeln(j);
// }



// let sayi=prompt("SAYI GİRİNİZ: ");
// let faktoriyel=1;
// for(let i=1; i<=sayi; i++)
// {
//     faktoriyel*=i;
// }
// alert(sayi +" SAYISININ FAKTORİYELİ= "+ faktoriyel);


// let toplam_sayfa=0;
// let gunluk=25;
// let kitap_sayfa_sayisi=300;
// document.writeln("<u> KİTAP OKUMA İLERLEMESİ </u><BR>");
// for(let i=1; toplam_sayfa<kitap_sayfa_sayisi; i++)
// {
//     toplam_sayfa+=gunluk;
//     if(toplam_sayfa>kitap_sayfa_sayisi)
//     {
//         toplam_sayfa=kitap_sayfa_sayisi;
//     }
//     document.writeln(i+ "  . GÜN: "+ toplam_sayfa + ". SAYFA.<BR>");
// }



let sifre="1234";
let deneme=0;
let girilen_sifre="";
while(girilen_sifre!=sifre && deneme<3)
{
   girilen_sifre=prompt("ŞİFRE GİRİNİZ: ");
   deneme++;
   if(girilen_sifre!==sifre)
   {
    alert("HATALI ŞİFRE! KALAN DENEME HAKKINIZ: "+(3-deneme));
   }

}
if(girilen_sifre==sifre)
{
    alert("BAŞARILI GİRİŞ. HOŞGELDİNİZ. ");
}
else
{
    alert("GİRİŞ BAŞARISIZ HESABINIZ BLOKE OLDU.");
}

