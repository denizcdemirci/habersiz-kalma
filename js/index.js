if (typeof localStorage.options == 'undefined' || localStorage.options == 'null') {
  window.location.href = 'options.html';
}
var a = JSON.parse(localStorage.news), r = a[Math.floor(Math.random() * a.length)];
$('body').css('background-image', 'url(' + r.image + ')');
$('.article').append('<p class="title">' + r.title + '</p><p class="description">' + r.description + '</p><p class="more"><a href=' + r.link + '>Bu haberin devamını okumak istiyorum</a></p>');
if (r.description == '') {
  $('.description').hide();
}
