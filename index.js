var btnplus=document.getElementsByClassName("btn_plus");
var btnMinus=document.getElementsByClassName("btn_minus");
var Bshirt=document.getElementsByClassName("Shirt");
var BtBlue=document.getElementsByClassName("DeleteShirt");
var Liked=document.getElementById("Lheart");
var Calcul=document.getElementById("calcul");

var LikeImg = document.getElementsByClassName("ImageLikey");

var UnitPrice = 0;

for ( let btn of BtBlue){
 btn.addEventListener("click",function(){
        btn.parentNode.remove();
    })
}


//UnitPrice = Number(Price[0].innerHTML);



for(let i=0;i<btnplus.length;i++){
    btnplus[i].addEventListener("click",function(){  
      btnplus[i].previousElementSibling.innerHTML ++;
   somme()
    })
}
function somme(){
  let sum=0
  var unitPrice= document.getElementsByClassName("prix");
    console.log(unitPrice,"unitPrice")
   var quantity= document.getElementsByClassName("qte");
   console.log(quantity,"quantity")
 for (let i=0;i<unitPrice.length;i++){
   sum=sum +unitPrice[i].innerHTML* quantity[i].innerHTML
   console.log(sum,"sum")
 }
  return document.getElementById("PrixTotale").innerHTML=sum
} 


for(let i=0;i<btnMinus.length;i++){
    btnMinus[i].addEventListener("click",function(){
      if( btnMinus[i].nextElementSibling.innerHTML> 0)
        btnMinus[i].nextElementSibling.innerHTML --
       somme()
    })
}

for(let i=0;i<LikeImg.length;i++){
   LikeImg[i].addEventListener("click",function(){ 
     if(LikeImg[i].src == "https://logowik.com/content/uploads/images/like-heart2255.logowik.com.webp" )
     {LikeImg[i].src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/2224px-A_perfect_SVG_heart.svg.png";
    }else
      LikeImg[i].src="https://logowik.com/content/uploads/images/like-heart2255.logowik.com.webp"
   })
}

       
 















                  



                  