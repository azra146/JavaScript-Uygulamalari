//ID'si ana baslik olan başlığı yakalayın ve rengini kırmızı yapın.
let baslik=document.getElementById("ana-baslik");
console.log("1. görev: "+ baslik + "<BR>");
baslik.style.color="red";

//SINIFI .BİLGİ-METNİ OLAN ELEMENTLERDEN İLKİNİ YAKALAYIN VE ARKA PLANI SARI YAPIN.
let ilkParagraf=document.querySelector(".bilgi-metni");
console.log("2. görev: "+ ilkParagraf + "<BR>");
ilkParagraf.style.backgroundColor="YELLOW";

// etiket adı a kullanarak link elementini yakalayın ve içeriden 60px boşluk bırakın.
let link=document.querySelector("a");
console.log("3. görev: "+ link + "<BR>");
link.style.paddingLeft="60PX";


let listeMaddeleri=document.querySelectorAll(".liste-maddesi");
console.log("4. görev: "+ listeMaddeleri + "<BR>");



