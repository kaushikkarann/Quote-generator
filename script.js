let quote=document.querySelector(".quote")
let author=document.querySelector(".author");

let api_url="https://api.quotable.io/quotes/random?maxLength=50";


async function getquote(url) {

    let response=await fetch(url)
    var data= await response.json()
    console.log(data);
    quote.innerHTML=data[0].content;
    author.innerHTML="---"+data[0].author;
  
};




getquote(api_url)