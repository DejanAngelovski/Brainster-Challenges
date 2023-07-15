$(function () {
  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.products.length; i++) {
        $(".card-box-inner")
          .append(`<figure class="${data.products[i].gender} ${data.products[i].brand}">
			<div class="img-box">
			 <a href="#">
			   <img class="bike-img" src="img/${data.products[i].image}.png" alt="bike">
			   <div class="bike-description">
				 <figcaption>${data.products[i].name}</figcaption>
				 <small>${data.products[i].price} $</small>
			   </div>
			  </a>
			</div>
		 </figure>`);
      }
      let showAllBike = $(".card-box-inner").children().length;
      $(".filter-all").text(showAllBike);

      let showMaleBike = $(".MALE").children().length;
      $(".filter-male").text(showMaleBike);

      let showFemaleBike = $(".FEMALE").children().length;
      $(".filter-female").text(showFemaleBike);

      let showGrandBike = $(".LE.GRAND.BIKES").children().length;
      $(".grand").text(showGrandBike);

      let showKrossBike = $(".KROSS").children().length;
      $(".kross").text(showKrossBike);

      let showExplorerBike = $(".EXPLORER").children().length;
      $(".explorer").text(showExplorerBike);

      let showVisitorBike = $(".VISITOR").children().length;
      $(".visitor").text(showVisitorBike);

      let showPonyBike = $(".PONY").children().length;
      $(".pony").text(showPonyBike);

      let showForceBike = $(".FORCE").children().length;
      $(".force").text(showForceBike);

      let showEBikeBike = $(".E-BIKES").children().length;
      $(".e-bike").text(showEBikeBike);

      let showIdealBike = $(".IDEAL").children().length;
      $(".ideal").text(showIdealBike);
    });

  $(".filter-list li").on("click", function () {
    let value = $(this).attr("data-filter");
    if (value == "all") {
      $("figure").show("1000");
    } else {
      $("figure")
        .not("." + value.toUpperCase())
        .hide("1000");
      $("figure")
        .filter("." + value.toUpperCase())
        .show("1000");
    }
    $("li").removeClass("active");
    $(this).addClass("active");
  });

  $(".hamburger").click(function () {
    $(".navbar-manu").collapse("show").animate({
      left: "0px",
    });
  });

  $(".close").click(function () {
    $(".navbar-manu").fadeIn("slow").animate({
      left: "-100%",
    });
  });
});
