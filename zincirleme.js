//metni temizle
const trimle = (metin) =>{return metin.trim();}

//metni büyüt
const buyukHarfYap=(metin) => {return metin.toUpperCase();}

//çıktı formatla
const formatla =(metin) => {return `İşlenmiş Veri: ${metin}`;}

//kullanıcıdan boşluklu metin al
let kullaniciGirdisi=prompt("Lütfen başında ve sonunda boşluk bulunan metin giriniz.");

//zincirleme çağrı oluştur
const nihalSonuc=formatla(buyukHarfYap(trimle(kullaniciGirdisi)));
document.writeln(nihalSonuc);

