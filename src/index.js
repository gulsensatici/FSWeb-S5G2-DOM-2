import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});
document.querySelector("nav").addEventListener("mouseleave",function(a){
alert("içerik incele")}
);
document.querySelector("h1").addEventListener("mouseout", function (event) {
    this.style.backgroundColor = "pink";
  });

  document.querySelector("h2").addEventListener("click", function (event) {
    this.style.backgroundColor = "yellow";
  });

  document.getElementsByTagName("p").addEventListener("mouseleave", function(event){
alert("bknz")
  });
/*document.querySelectorAll(".text-content h2").addEventListener("click", function(event){
    this.style.backgraundColor="yellow";
});*/

// Kodlar buraya gelecek!