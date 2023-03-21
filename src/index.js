import './less/index.less'
const logo = document.querySelector('h1');
logo.addEventListener('mouseover', ()=> {
    const colors= ["pink", "red", "yellow", 'purple', 'green'];
    function generateRandomNumber(number){
        return Math.floor(Math.random()* number);
    }
    logo.style.color= colors[generateRandomNumber(colors.length)];
});
const links = document.querySelector('nav a');

links.addEventListener('mouseover', ()=> {
    const colors= ["pink", "red", "yellow", 'purple', 'green'];
    function generateRandomNumber(number){
        return Math.floor(Math.random()* number);
    }
    links.style.color= colors[generateRandomNumber(colors.length)];

});
const baslik= document.querySelector('header h2');
baslik.addEventListener('mouseover',() =>{
    baslik.style.color= 'pink';
});



// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
alert("Bana tıkladın!")
});
document.querySelector("nav").addEventListener("mouseleave",function(a){
alert("içerik incele")}
);
document.querySelector("h1").addEventListener("mouseout", function (event) {
    this.style.backgroundColor = "black";
  });

  document.querySelector("h2").addEventListener("click", function (event) {
    this.style.backgroundColor = "yellow";
  });

  document.querySelector(".destination h4").addEventListener("mouseleave", function(event){
alert("bknz")
  }); 
  const button= document.querySelectorAll('.btn');
  button.forEach((item) => {
    item.addEventListener( "click", (event) => {
    event.target.style.backgroundColor='green';});
  });

  const basliklar = document.querySelectorAll('.text-content h2');
  basliklar.forEach((item) => {
    item.addEventListener('mouseleave', (event)=>{
        event.target.style.backgroundColor='red';
    });
  })
const img = document.getElementsByTagName('img');
img.forEach((item)=> {
    item.addEventListener('mouseleave',(event) => {
        img.style.opacity="0.6px";
    });
})

/*contentSection1Img.addEventListener('load', ()=> {
    console.log('Content section 1 image loaded');
});
document.addEventListener('scroll',()=>{
    destinationSectionImg.style.opacity = '0.5';

});
 /* const paragraf= document.querySelectorAll(".content-section p");
  paragraf[0].addEventListener("mouseleave", function(event){
    this.style.backgroundColor= "purple";
  });
  paragraf[1].addEventListener("mouseleave", function(event){
    this.style.backgroundColor= "purple";
  });
  paragraf[2].addEventListener("mouseleave", function(event){
    this.style.backgroundColor= "pink";
  });
  paragraf[3].addEventListener("mouseleave", function(event){
    this.style.backgroundColor= "pink";
  }); */
/*document.querySelectorAll(".text-content h2").addEventListener("click", function(event){
    this.style.backgraundColor="yellow";
});*/

// Kodlar buraya gelecek!