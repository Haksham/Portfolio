function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

const pos = document.querySelector('#poster');
let isclick=true;
let showpost=function() {
  if ( isclick) {
    pos.style.display = 'block';
    isclick = false;
  } 
  else{
    pos.style.display='none';
    isclick=true;
  }
}

const about = document.querySelector('#format');
let abclick=true;
function aboutf() {
  if ( abclick) {
    about.style.display = 'flex';
    abclick = false;
  } 
  else{
    about.style.display='none';
    abclick=true;
  }
}

const qr = document.querySelector('#whatqr');
let wclick=true;
function wqr(){
  if ( wclick) {
    qr.style.display = 'flex';
    wclick=false;
  } 
  else{
    qr.style.display='none';
    wclick=true;
  }
}

const pro = document.querySelector('#proj');
let proclick=true;
function proj(){
  if ( proclick) {
    pro.style.display = 'flex';
    proclick=false;
  } 
  else{
    pro.style.display='none';
    proclick=true;
  }
}

const ski = document.querySelector('#skill');
let skiclick=true;
function skile(){
  if ( skiclick) {
    ski.style.display = 'flex';
    skiclick=false;
  } 
  else{
    ski.style.display='none';
    skiclick=true;
  }
}

const con = document.querySelector('#contact');
let conclick=true;
function cont(){
  if ( conclick) {
    con.style.display = 'flex';
    conclick=false;
  } 
  else{
    con.style.display='none';
    conclick=true;
  }
}

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

let statclick=true;
function start(){
  if(statclick){
    statclick=false;

    con.style.display = 'flex';
    con.style.top="14em";
    con.style.right="20px";

    ski.style.display = 'flex';
    ski.style.top="1em";
    ski.style.right="1em";

    pro.style.display = 'flex';
    pro.style.top="-2em";
    pro.style.left="2em";

    qr.style.display = 'flex';
    qr.style.bottom="1em";
    qr.style.left="3em";

    about.style.display = 'flex';
  }
  else{
    statclick=true;

    con.style.display = 'none';
    con.style.top="";
    con.style.right="";

    ski.style.display = 'none';
    ski.style.top="";
    ski.style.right="";

    pro.style.display = 'none';
    pro.style.top="";
    pro.style.left="";

    qr.style.display = 'none';
    qr.style.bottom="";
    qr.style.left="";

    about.style.display = 'none';
  }
}

let nightclick=true;
function night(){
  if(nightclick){
    
    document.querySelector(
      ".top"
    ).style.color="white";

    document.querySelector(
      ".top"
    ).style.background="rgba(79, 79, 79,1)";
    document.querySelector(
      ".bottom"
    ).style.background="black";
    document.querySelector(
      ".mid"
    ).style.background="url(whites/arrow.jpeg)";
    document.querySelector(
      ".mid"
    ).style.backgroundColor="white";
    document.querySelector(
      ".mid"
    ).style.backgroundSize="75vw 80vh";

    document.querySelector(
      ".contact"
    ).style.background="rgb(44, 39, 39)";
    document.querySelector(
      ".format"
    ).style.background="rgb(44, 39, 39)";
    document.querySelector(
      ".proj"
    ).style.background="rgb(44, 39, 39)";
    document.querySelector(
      ".skill"
    ).style.background="rgb(44, 39, 39)";
    document.querySelector(
      ".sun-img"
    ).style.backgroundImage="url(whites/moon.png)";

    document.querySelector(
      ".my-img"
    ).style.backgroundImage="url(icons/pencil-removebg.png)";

    nightclick=false;
  }
  else{

    document.querySelector(
      ".top"
    ).style.color="";

    document.querySelector(
      ".top"
    ).style.background="";
    document.querySelector(
      ".bottom"
    ).style.background="";
    document.querySelector(
      ".mid"
    ).style.background="";
    document.querySelector(
      ".mid"
    ).style.backgroundSize="";
    document.querySelector(
      ".contact"
    ).style.background="";
    document.querySelector(
      ".format"
    ).style.background="";
    document.querySelector(
      ".proj"
    ).style.background="";
    document.querySelector(
      ".skill"
    ).style.background="";
    document.querySelector(
      ".sun-img"
    ).style.backgroundImage="";
    document.querySelector(
      ".my-img"
    ).style.backgroundImage="";

    nightclick=true;
  }
}