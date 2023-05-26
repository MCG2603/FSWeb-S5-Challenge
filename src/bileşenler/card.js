import axios from 'axios'
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const containerDiv5=document.createElement("div");
  containerDiv5.classList.add("card");
  const containerDiv6=document.createElement("div");
  containerDiv6.classList.add("headline");
  containerDiv6.textContent=makale["anabaslik"];
  const containerDiv7=document.createElement("div");
  containerDiv7.classList.add("author");
  const containerDiv8=document.createElement("div");
  containerDiv8.classList.add("img-container");
  const img1=document.createElement("img");
  img1.src=makale["yazarFoto"];
  const span3=document.createElement("span");
  span3.textContent=makale["yazarAdı"];
  containerDiv8.append(img1);
  containerDiv7.append(containerDiv8,span3);
  containerDiv5.append(containerDiv6,containerDiv7);
  containerDiv5.addEventListener("click",e=>{
  console.log(makale["anabaslik"]);
  })
  return containerDiv5;


}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  
  axios.get('http://localhost:5001/api/makaleler').then(makal=>{
    makal.data.makaleler.javascript.forEach(element => {
    document.querySelector(secici).append(Card(element))
   });
   makal.data.makaleler.bootstrap.forEach(element => {
    document.querySelector(secici).append(Card(element))
   });
   makal.data.makaleler.teknoloji.forEach(element => {
    document.querySelector(secici).append(Card(element))
   });
   
  })
  
}


export { Card, cardEkleyici }
