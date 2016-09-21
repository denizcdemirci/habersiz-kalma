var articles = [];
var articleSubject = localStorage.articleSubject;
var images = ['gezi', 'bogazici'];

if (typeof articleSubject == 'undefined') {
  localStorage.articleSubject = 'turkiye';
}

$.get('http://www.ntv.com.tr/' + articleSubject + '.rss', function(data) {
}).done(function(data) {
  $(data).find('entry').each(function() {
    var $this = $(this),
    item = {
      title: $this.find('title').text(),
      description: $this.find('summary').text(),
      image: $this.find('content').text(),
      link: $this.find('id').text()
    }
    articles.push ({
      title: item.title,
      description: item.description,
      image: item.image,
      link: item.link
    });
  });
  articleDone();
}).fail(function() {
  articleFail();
});

function articleDone() {
  var article = articles[Math.floor(Math.random() * articles.length)];
  var regExp = /\ src="(.*?)\?width/;
  $('body').css('background-image', 'url(' + regExp.exec(article.image)[1] + ')');
  $('.title').html(article.title);
  $('.description').html(article.description);
  $('.more').html('<a href=' + article.link + '>Bu haberin devamını okumak istiyorum</a>');
  if (article.description == '') {
    $('.description').hide();
    $('.more').css('margin-top', '20px');
  }
}

function articleFail() {
  var image = images[Math.floor(Math.random() * images.length)];
  $('body').css('background-image', 'url("img/' + image + '.jpg")');
  $('.title').css('opacity', '.8').html('Haberler güncellenemedi');
  $('.description').html('Haberler güncellenirken bir sorunla karşılaşıldı ve güncel haberler alınamadı. Bu sorun internet bağlantınız veya haber sitesindeki yoğunluk nedeniyle olabilir.');
  $('.more').html('<a href="#">Haberleri güncellemeyi tekrar dene</a>');
}
