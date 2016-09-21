var articleSubject = localStorage.articleSubject;
var images = ['gezi', 'bogazici'];

var image = images[Math.floor(Math.random() * images.length)];
$('body').css('background-image', 'url("img/' + image + '.jpg")');

if (typeof articleSubject == 'undefined') {
  localStorage.articleSubject = 'turkiye';
}

$('#subject').change(function() {
  var saveSubject = $(this).val();
  localStorage.articleSubject = saveSubject;
  $('.saved').css('opacity', '.8');
  setTimeout(function() {
    $('.saved').css('opacity', '0');
  }, 1000);
});

$('.settings option[value=' + articleSubject + ']').prop('selected', 'selected');
