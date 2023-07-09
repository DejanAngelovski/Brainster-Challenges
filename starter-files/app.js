$(function () {
  //write your code here
  let car1 = $(".car1");
  let car2 = $(".car2");
  let bodyWidth = $("body").width();
  let timer = $(".timer");
  let timerBg = $(".timer-bg");
  let index = 4;

  $("#race-btn").on("click", function () {
    $(this).attr("disabled", true);
    $("#start-over-btn").attr("disabled", true);
    let race = setInterval(() => {
      timer.css("display", "block");
      timerBg.css("display", "block");
      index--;
      timer.text(index);
    }, 1000);

    setTimeout(() => {
      clearInterval(race);
      let calc = bodyWidth - car1.width();
      timer.css("display", "none");
      timerBg.css("display", "none");
      let speed1 = 500 + Math.floor(Math.random() * 5000);
      let speed2 = 500 + Math.floor(Math.random() * 5000);

      let car1Finish, car2Finish;

      let tr = $("<tr class='row'>");
      let td1 = $("<td class='col-5 offset-1 mb-2'>");
      let td2 = $("<td class='col-5 offset-1 mb-2'>");

      $("tbody").prepend(tr);

      if (speed1 > speed2) {
        car1Finish = "Second";
        car2Finish = "First";
        setTimeout(() => {
          $(".flag").css("display", "block");
          $(".timer-bg").css("display", "block");
        }, speed2);
        setTimeout(() => {
          $("#start-over-btn").attr("disabled", false);
        }, speed1);
      } else {
        car1Finish = "First";
        car2Finish = "Second";
        setTimeout(() => {
          $(".flag").css("display", "block");
          $(".timer-bg").css("display", "block");
        }, speed1);
        setTimeout(() => {
          $("#start-over-btn").attr("disabled", false);
        }, speed2);
      }

      localStorage.setItem("Place-Car1", car1Finish);
      localStorage.setItem("Place-Car2", car2Finish);
      localStorage.setItem("Finish-time-car1", speed1);
      localStorage.setItem("Finish-time-car2", speed2);

      car1.animate({ marginLeft: calc }, speed1, function () {
        td1
          .html(
            `Finished in: <span class='car1-color font-weight-bold'>${car1Finish}</span> place with a time of: <span class='car1-color font-weight-bold'>${speed1}</span> miliseconds`
          )
          .addClass("border");
      });
      car2.animate({ marginLeft: calc }, speed2, function () {
        td2
          .html(
            `Finished in: <span class='car2-color font-weight-bold'>${car2Finish}</span> place with a time of: <span class='car2-color font-weight-bold'>${speed2}</span> miliseconds`
          )
          .addClass("border");
      });
      tr.append(td1);
      tr.append(td2);
    }, 4000);
  });

  if (
    localStorage.getItem("Place-Car1") &&
    localStorage.getItem("Place-Car2") &&
    localStorage.getItem("Finish-time-car1") &&
    localStorage.getItem("Finish-time-car2")
  ) {
    let place1 = localStorage.getItem("Place-Car1");
    let place2 = localStorage.getItem("Place-Car2");
    let finishTimeCar1 = localStorage.getItem("Finish-time-car1");
    let finishTimeCar2 = localStorage.getItem("Finish-time-car2");
    $(".car1-prev-results").html(
      `<p class="text-white mb-0"><span class='car1-color'>Car1</span> finished in <span class='car1-color'>${place1}</span> place, with a time of <span class='car1-color'>${finishTimeCar1}</span></p>`
    );
    $(".car2-prev-results").html(
      `<p class="text-white mb-0"><span class='car2-color'>Car2</span> finished in <span class='car2-color'>${place2}</span> place, with a time of <span class='car2-color'>${finishTimeCar2}</span></p>`
    );
    $(".car1-prev-results").addClass("border mb-2");
    $(".car2-prev-results").addClass("border");
  }

  $("#start-over-btn").on("click", function () {
    $("#race-btn").attr("disabled", false);
    car1.css("margin-left", 0);
    car2.css("margin-left", 0);
    $(".flag").css("display", "none");
    $(".timer-bg").css("display", "none");
    index = 4;
  });
});
