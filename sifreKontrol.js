function sifreKontrol(hamSifre)
{
    if(hamSifre==null || hamSifre.trim()=="")
    {
        alert("Girdi alınamadı alan boş bırakıldı.")
        return false;
    }

//girdi temizle 
    let temizSifre=hamSifre.trim();
    document.writeln(`Kontrol edilen sifre: "${temizSifre}"` + "<br>");
    if(temizSifre.length<8)
    {
        document.writeln("Şifreniz başarısız en az 8 karakter olmalıdır"+"<BR>");
        return false;
    }
    else if(!temizSifre.includes("!"))
    {
        document.writeln("başarısız şifre ! karakteri içermeli" + "<BR>");
        return false;
    }
    else
    {
        document.writeln("başarılı şifre"+ "<br>");
        return true;
    }
    
}
let kullaniciGirdisi=prompt("Lütfen şifre giriniz:");
let sonuc=sifreKontrol(kullaniciGirdisi);
document.writeln(`İşlem sonucu(true/false): ${sonuc}`);
