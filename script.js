function copyTo(mail) {
  navigator.clipboard.writeText(mail);
  alert("Skopiowałeś maila" + mail);
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
  $("#get").click(function (event) {
    event.stopPropagation();
    $("#panel").slideToggle();
    $(this).toggleClass("rotated");
  });

  $("#get1").click(function (event) {
    event.stopPropagation();
    $("#panel1").slideToggle();
    $(this).toggleClass("rotated");
  });

  $("#get2").click(function (event) {
    event.stopPropagation();
    $("#panel2").slideToggle();
    $(this).toggleClass("rotated");
  });

  $("#get3").click(function (event) {
    event.stopPropagation();
    $("#panel3").slideToggle();
    $(this).toggleClass("rotated");
  });

  $("#get4").click(function (event) {
    event.stopPropagation();
    $("#panel4").slideToggle();
    $(this).toggleClass("rotated");
  });
});
