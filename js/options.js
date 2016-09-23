var articleSubject = localStorage.articleSubject;
var images = ['anitkabir', 'bogazici', 'gezi', 'istanbul', 'kizkulesi', 'saatkulesi'];

var image = images[Math.floor(Math.random() * images.length)];
$('body').css('background-image', 'url("img/' + image + '.jpg")');

if (typeof articleSubject == 'undefined' || articleSubject == 'null') {
  articleSubject = 'turkiye';
  localStorage.articleSubject = 'turkiye';
}

$('.subject').change(function() {
  localStorage.articleSubject = $(".settings input[name=subject-radio]:checked").val();
});

$('.settings input[name=subject-radio][value=' + articleSubject + ']').prop('checked', true);
