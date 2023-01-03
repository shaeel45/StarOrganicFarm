 // animated
 AOS.init();

 // slider
 const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 5,
   autoplay: {
     delay: 800
   },

   pagination: {
     el: '.swiper-pagination',
   },
   breakpoints: {
    320:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 1,
    },
     640: {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     768: {
       slidesPerView: 3,
       spaceBetween: 20,
     },
     1024: {
       slidesPerView: 4,
       spaceBetween: 30,
     },

   },

   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

 //  jQuery navbar
 $(window).scroll(function () {
   var scroll = $(window).scrollTop();

   if (scroll >= 150) {
     $(".navbar").css("background-color", "white")
     $(".navbar").css("padding", "0px 20px")
     // $("#it").css("oppacity","1")

   }
   else {
     $(".navbar").css("background-color", "rgb(255, 255, 255, 1)")
     $(".navbar").css("padding", "20px 20px")
     // $("#it").css("oppacity","0")


   }
 });


 var link = window.location.href;
 var url = new URL(link);
 var id = url.searchParams.get('pro');

function nutro(){
  for(var i = 0;i<=3;i++)
    if (data[i].ProductCategories == "Nutritious Cereals"){
      if(data[i].ProductCategories == id){
        document.getElementById('card-data').innerHTML += `
     
        <div class="col-md-4">
           <div class="product-card">
                      <div class="badge">Hot</div>                      <div class="product-tumb">
                       <img src="${data[i].ProductImage}" alt="">
                      </div>
                      <div class="product-details">
                       <span class="product-catagory">${data[i].ProductName}</span>
                         
                        <div class="product-bottom-details">
                          <div class="product-price">${data[i].ProductRate}</div>
                         <div class="product-links">
                           <a href=""><i class="fa fa-heart"></i></a>
                         
                         </div>           
                                      </div>
                     </div>
                   </div>
        </div>
                 `

      }
    }

}


//  for (var i = 0; i < 3; i++)
//    if (data[i].ProductCategories == "Nutritious Cereals") {

//      if (data[i].ProductCategories == id) {
//        document.getElementById('card-data').innerHTML += `
     
//        <div class="col-md-4">
//            <div class="product-card">
//                       <div class="badge">Hot</div> -->
//                      <div class="product-tumb">
//                        <img src="${data[i].ProductImage}" alt="">
//                      </div>
//                      <div class="product-details">
//                        <span class="product-catagory">${data[i].ProductName}</span>
                         
//                        <div class="product-bottom-details">
//                          <div class="product-price">${data[i].ProductRate}</div>
//                          <div class="product-links">
//                            <a href=""><i class="fa fa-heart"></i></a>
                         
//                          </div>
//                        </div>
//                      </div>
//                    </div>
//        </div>
//                  `
//      }
//    };
//  for (var i = 0; i < 3; i++)
//    if (data[i].ProductCategories == "Spices and Condiments") {

//      if (data[i].ProductCategories == id) {
//        document.getElementById('card-data').innerHTML += `
     
//        <div class="col-md-4">
//            <div class="card card-cascade card-ecommerce wider shadow mb-5 ">
               
//                <div class="view view-cascade overlay text-center"> 
//          <img class="card-img-top" src="${data[i].ProductImage}" alt=""> </div>
               
//                <div class="card-body text-center">
                   
//                    <h4 class="card-title"><strong><a href="">${data[i].ProductName}</a></strong></h4> 
//                    <p class="card-text">${data[i].ProductDiscription} </p>
//                    <p class="price">${data[i].ProductRate}</p> 
//                    <ul class="row rating text-warning">
//                        <li><i class="fa fa-star"></i></li>
//                        <li><i class="fa fa-star"></i></li>
//                        <li><i class="fa fa-star"></i></li>
//                        <li><i class="fa fa-star"></i></li>
//                        <li><i class="fa fa-star"></i></li>
//                    </ul>
                   
//                    <div class="card-footer">
//                        <button class="btn"> 
//                     Buy Now
//             </button>
//                    </div>
//                </div>
//            </div>
//        </div>
//                  `
//      }
//    }

   function openproduct(){
    window.open("products.html","_self")
    document.getElementById(product).style.display='block'
   }


  // var dropclick = document.getElementById('#nutrientclick', '#spiceclick', '#pulsesclick', '#cookclick', '#fruitclick', '#agroclick', '#oilclick', '#flourclick' , '#riceclick')
  // var proclick = document.getElementById('#click')
  // Btn.onclick = function(){
  //   if(dropclick.style.display.hide='none'){
  //     dropclick.style.display='block'
  //   }else{
  //     dropclick.style.display="none"
  //   }
  // };


  // Requires jQuery, include this script in both pages of website
// $(function() {

//   // When sign-up-but clicked, use localStorage to remember to hide
//   // the missing-information div by using localStorage.setItem()
//   $('#nutrientclick', '#spiceclick', '#pulsesclick', '#cookclick', '#fruitclick', '#agroclick', '#oilclick', '#flourclick' , '#riceclick').click(function() {
//     localStorage.setItem('click', 'hide');  
//   });  

//   // When the page is loaded and this script is run, check if 
//   // "missing-information" has "hide" in localStorage
//   if(localStorage.getItem('click') === 'hide') {

//     // If "hide" is in local storage, then hide() any element with
//     // id of missing-information that exists on the page
//     $('click').hide();
//   }

// });
