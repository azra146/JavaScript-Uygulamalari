const cumle=prompt("CÜMLE GİRİNİZ: ");
let uzunluk=cumle.length;
if(cumle== null || cumle.trim()=="")
{
    document.writeln("GEÇERSİZ ");
}
else
{
    let sonuc=uzunluk(cumle.trim());
    document.writeln(`Girdiğiniz metin ${sonuc} Karakterden oluşmaktadır. `);
}

// const uzunluk = metin => metin.length;
// let cumle=prompt("CÜMLE GİRİNİZ: ");
// if(cumle== null || cumle.trim()=="")
// {
//     document.writeln("GEÇERSİZ ");
// }
// else{
//     let sonuc=uzunluk(cumle.trim());
//     document.writeln(`Girdiğiniz metin ${sonuc} Karakterden oluşmaktadır. `);
// }


