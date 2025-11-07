let secim;
let bakiye=1000;
do{

    secim=prompt(`
        OYUN MENÜSÜ
        ---------------------
        1-Para Yatır
        2-Para Çek
        3-Bakiye Görüntüleme
        4-Çıkış
        Seçiminiz:(1-4):
      `);
      switch(secim)
      {
        case "1":
            let yatirilan=Number(prompt("Yatırılıcak Miktar: "));
            if(yatirilan>0)
            {
                bakiye+=yatirilan;
                alert(yatirilan + " Tl Yatırıldı. Yeni Bakiye: "+ bakiye+" TL");
            }
            break;
        case "2":
            let cekilen=Number(prompt("Çekilicek Miktar: "));
            if(cekilen>0 && cekilen<=bakiye)
            {
                bakiye-=cekilen;
                alert(cekilen + " TL Çekildi. Kalan Bakiye: "+ bakiye + " TL");
            }
            else
            {
                alert("Geçeriz Miktar.");
            }
            break;
        case "3":
            alert("Bakiyeniz: "+ bakiye + " TL");
            break;
        case "4":
            alert("Çıkılıyor...");
            break;
            default: 
              alert("Geçersiz Seçim.");
      }
}
while(secim!="4");