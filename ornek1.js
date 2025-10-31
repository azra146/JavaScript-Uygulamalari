let mevsim=prompt("BİR MEVSİM GİRİNİZ: ");
switch(mevsim.toLowerCase())
{
    case "kış":
        alert("kayak yapabilirsiniz");
        break;
    case "ilkbahar":
        alert("doğa yürüyüşü yapabilirsiniz");
        break;
    case "yaz":
        alert("denize gidebilirsiniz");
        break;
    case "sonbahar":
        alert("yaprak toplayabilirsiniz");
        break;
    default:
        alert("GEÇERSİZ MEVSİM GİRİŞİ YAPTINIZ! ");
        break;
}