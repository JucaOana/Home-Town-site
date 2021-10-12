
/*toggle butto*/
    var toggleStatus = 0;
        function toggleMenu(){
       if(toggleStatus == 1){
  document.getElementById("menu").style.left = "-100%";
            
           toggleStatus = 0;
 } else if (toggleStatus == 0){
   document.getElementById("menu").style.left= "0";
   
      toggleStatus = 1;
   }
 }
             
/*explore bt*/

var exploreStatus =0;

function explore(){
    if(exploreStatus == 1){
        document.getElementById("ul2").style.display="none";
        exploreStatus = 0;
        
    }else if(exploreStatus == 0){
        document.getElementById("ul2").style.display="block";
        exploreStatus=1;
    }
}




/*scroll functions*/

 window.addEventListener('scroll', ()=>{
    var WScroll = window.scrollY;
     var i = 0;
     var squares = document.querySelector(".squares");
     var eachsquare= document.querySelectorAll(".figure");
     
     if(WScroll > squares.offsetTop-635){
         
            console.log(WScroll);
             
            for(i=0;i<eachsquare.length;i++){
             var currentItem=eachsquare[i]; 
             currentItem.classList.add("show");
             
         } 
             
         
         
         
         
     }
     
    
});





       function initMap() {
  // The location of Uluru
  var uluru = {lat: 47.230879, lng: 22.800846};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
















 