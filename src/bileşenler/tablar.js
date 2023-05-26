import axios from 'axios'

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const containerDiv1=document.createElement("div");
  containerDiv1.classList.add("topics");
  const containerDiv2=document.createElement("div");
  containerDiv2.classList.add("tab");
  const containerDiv3=document.createElement("div");
  containerDiv3.classList.add("tab");
  const containerDiv4=document.createElement("div");
  containerDiv4.classList.add("tab");
  containerDiv2.textContent=konu[0];
  containerDiv3.textContent=konu[1];
  containerDiv4.textContent=konu[2];
  containerDiv1.append(containerDiv2,containerDiv3,containerDiv4);
  return containerDiv1;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  let konular1;
    axios.get('http://localhost:5001/api/konular').then((konular)=>{
    console.log(konular.data);
    konular1=konular.data["konular"];
    console.log(konular1);
    document.querySelector(secici).append(Tablar(konular1));
  })
  
};


export { Tablar, tabEkleyici }