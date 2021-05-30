let  first = sessionStorage.getItem("first");
let  second = sessionStorage.getItem("second");
let third = sessionStorage.getItem("third");
let yolSet = sessionStorage.getItem("yolSet");
let yolNet = sessionStorage.getItem("yolNet");

document.querySelector(".firsthide").style.display = "none";
//document.querySelector(".secondhide").style.display = "none";
//document.querySelector(".thirdhide").style.display = "none";


let mess;
let typo;


//first
if (
   first >  second &&
   first > third 
  
) {
  //typo = "Confidence Level : Low";
  mess = [
    "Your results show that you have low confidence and it is one of the reasons why your business is struggling. Don’t get disappointed, its never too late for a fresh start because confidence is one of those skills that can be developed by training.",
    



  ];
  document.querySelector(".firsthide").style.display = "block";
}

// second
else if (
   second >  first &&
   second > third 
  
) {
 // typo = "Confidence Level : Good,but needs Improvement";
  mess = [
"Your results show that you have been trying to manage your confidence from time to time but still it may not be enough to reach big goals in  business . Good news is that its never too late to enhance the confidence you already have because confidence is one of those skills that can be developed by training.",



  
  ]; 
  document.querySelector(".firsthide").style.display = "block";
}
//third
else if (
  third >  second &&
  third >  first 
 
) {
 
  mess = [
    "Your results show that you are a confident person. Keep up the good work, however it is important to maintain the confidence you already own because confidence is one of those skills that can be developed by training.",
   



    
  ];
  //document.querySelector(".thirdhide").style.display = "block"; 
}


//first === second
else if (
  first ==  second &&
  first >  third 
  
) {
 // typo = "Confidence Level : Low";
  mess = [
    "Your results show that you have low confidence and it is one of the reasons why your business is struggling. Don’t get disappointed, its never too late for a fresh start because confidence is one of those skills that can be developed by training.",
   



  ];
  document.querySelector(".firsthide").style.display = "block";
 // document.querySelector(".secondhide").style.display = "block";
  
}

//SECOND == THIRD
else if (
  second ==  third &&
  second >  first 
 
) {
 
  //typo = "Confident Level :  High";
  mess = [
    "Your results show that you are a confident person. Keep up the good work, however it is important to maintain the confidence you already own because confidence is one of those skills that can be developed by training.",
  

]
 
  
}
//third == first
else if (
  third ==  first &&
  third >  second 

) {
 // typo = "Confidence Level : Good,but needs Improvement";
  mess = [
"Your results show that you have been trying to manage your confidence from time to time but still it may not be enough to reach big goals in  business . Good news is that its never too late to enhance the confidence you already have because confidence is one of those skills that can be developed by training.",




  
  ]; 
  document.querySelector(".firsthide").style.display = "block";
  
}

 

  

   


else{
  {
    //typo = "Confidence Level : Good,but needs Improvement";
    mess = [
  "Your results show that you have been trying to manage your confidence from time to time but still it may not be enough to reach big goals in  business . Good news is that its never too late to enhance the confidence you already have because confidence is one of those skills that can be developed by training.",
  
  
    
    ]; 
    document.querySelector(".firsthide").style.display = "block";
  }
}

if (yolSet != null && yolNet != null){
  typo = `We also noticed that you have experienced with ${yolSet} and ${yolNet} ,We are here to help you overcome your past bad experiences and boost your self-confidence. Take the course right now to start your success journey.`;

}
else(
  typo = " "
)


const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
    const headmsg = document.querySelector(".headmsg");
   
    headmsg.innerHTML = typo;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";
//console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
