let suankiSaat=new Date().getHours();
let suankiDakika=new Date().getMinutes();
document.writeln("SAAT VE DAKİKA: "+ suankiSaat + "."+ suankiDakika + "<br>");
let sinavSaati=14;
let sinavDakika=15;
if(suankiSaat<sinavSaati)
{
    let kalanSaat=sinavSaati-suankiSaat;
    let kalanDakika=60-suankiDakika;
    document.writeln("sınava "+ kalanSaat + "saat "+ kalanDakika + " dakika kaldı." );
}
else if(suankiSaat==sinavSaati && suankiDakika<sinavDakika)
{
    let kalanDakika=sinavDakika-suankiDakika;
   document.writeln("sınava "+ kalanDakika+ "dakika var!");
}
else if(suankiSaat==sinavSaati && suankiDakika>=sinavDakika)
{
    let kalanDakika=sinavDakika-suankiDakika;
    document.writeln("Sınav başladı! Hemen giriş yapınız!");
}
else
{
    document.writeln("Sınav süresi doldu.");
}
