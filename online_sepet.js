const urunfiyat=Number(prompt("SAYI GİRİNİZ: "));
const indirimFiyat=function(orjinalfiyat,indirimYüzdesi)
{
    const indirimMiktari=orjinalfiyat*(indirimYüzdesi/100);
    const nihalFiyat=orjinalfiyat-indirimMiktari;
    return nihalFiyat;
}
let kazancim=indirimFiyat(urunfiyat,25);
document.writeln(`Ürünün %25 İndirimle: ${kazancim} TL`);