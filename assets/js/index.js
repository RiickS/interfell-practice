$(document).ready(function () {
  $(".owl-carousel.first-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  });
  $(".owl-carousel.second-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    center: true,
    items: 1,
    stagePadding: 90,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 1,
        stagePadding: 30,
      },
      300: {
        stagePadding: 60,
      },
      500: {
        items: 1,
        stagePadding: 90,
      },
      600: {
        items: 1,
        stagePadding: 150,
      },
      700: {
        stagePadding: 160,
      },
      800: {
        stagePadding: 200,
      },
      900: {
        stagePadding: 220,
      },
      1000: {
        stagePadding: 250,
      },
      1200: {
        items: 3,
        stagePadding: 150,
      },
      1300: {
        items: 3,
        stagePadding: 200,
      },
    },
  });
});


// |||| CARD BTN ||||

function openCard(event) {
  var btnCard = event.getAttribute("btnCard");

  var elementCero = document.getElementsByClassName(`card-${btnCard}`)[0];
  var elementUno = document.getElementsByClassName(`card-${btnCard}`)[1];

  elementCero.style.transform = "rotatey(360deg)"
  elementUno.style.transform = "rotatey(360deg)"


  var rowCero = document.getElementsByClassName(`row-${btnCard}`)[0];
  var rowUno = document.getElementsByClassName(`row-${btnCard}`)[1];


  var rowCeroUno = document.getElementsByClassName(`row${btnCard}-${btnCard}`)[0];
  var rowUnoUno = document.getElementsByClassName(`row${btnCard}-${btnCard}`)[1];

  rowCero.style.opacity = "0";
  rowUno.style.opacity = "0";

  setTimeout(() => {
    rowCero.style.display = "none";
    rowUno.style.display = "none";
  }, 500);


  setTimeout(() => {
    rowCeroUno.style.display = "flex";
    rowUnoUno.style.display = "flex";
  }, 1000);



}


function closeCard(event) {
  var btnCard = event.getAttribute("btnCard");
  console.log(event + 'Cerro Card');
  var elementCero = document.getElementsByClassName(`card-${btnCard}-${btnCard}`)[0];
  var elementUno = document.getElementsByClassName(`card$-${btnCard}-${btnCard}`)[1];

  elementCero.style.transform = "rotatey(360deg)"
  elementUno.style.transform = "rotatey(360deg)"

  // var rowCero = document.getElementsByClassName(`row-${btnCard}`)[0];
  // var rowUno = document.getElementsByClassName(`row-${btnCard}`)[1];


  // var rowCeroUno = document.getElementsByClassName(`row${btnCard}-${btnCard}`)[0];
  // var rowUnoUno = document.getElementsByClassName(`row${btnCard}-${btnCard}`)[1];

  // rowCero.style.opacity = "0";
  // rowUno.style.opacity = "0";

  // setTimeout(() => {
  //   rowCero.style.display = "none";
  //   rowUno.style.display = "none";
  // }, 500);


  // setTimeout(() => {
  //   rowCeroUno.style.display = "flex";
  //   rowUnoUno.style.display = "flex";
  // }, 1000);
}


// ||| RESIZE  ||| 

// $(window).resize(function () {
//   var height = $("#card-1").width();
//   height = height / 2



//   $(".items-img").height(height)


// });a