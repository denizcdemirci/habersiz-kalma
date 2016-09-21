var articleSubject = localStorage.articleSubject;
var images = ["gezi", "bogazici"];

var image = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = 'url("img/'+ image +'.jpg")';

if (typeof articleSubject == "undefined") {
  localStorage.articleSubject = "turkiye";
}

$("#subject").change(function() {
  var saveSubject = $(this).val();
  localStorage.articleSubject = saveSubject;
  $(".saved").css("color", "#fff");
  setTimeout(function() {
    $(".saved").css("color", "transparent");
  }, 1000);
});

$(".settings option[value=" + articleSubject + "]").prop("selected", "selected");
