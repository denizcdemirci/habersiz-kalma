(function() {

  var articles = [];

  $.get("http://www.ntv.com.tr/turkiye.rss", function(data) {
  }).done(function(data) {
    var $xml = $(data);
    $xml.find("entry").each(function() {
      var $this = $(this),
      item = {
        title: $this.find("title").text(),
        description: $this.find("summary").text(),
        image: $this.find("content").text(),
        link: $this.find("id").text()
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
    var monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    var date = new Date();
    var regExp = /\ src="(.*?)\?width/;
    var articleImage = regExp.exec(article.image);
    document.getElementById("article").innerHTML =
    '<p class="date">' + date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + ' Türkiye gündeminden bir kesit</p>' +
    '<p class="title">' + article.title + '</p>' +
    '<p class="description">' + article.description + '</p>' +
    '<p class="more"><a href=' + article.link + '>Bu haberin devamını okumak istiyorum</a></p>';
    document.body.style.backgroundImage = 'url('+ articleImage[1] +')';
  }

  function articleFail() {
    document.getElementById("article").innerHTML =
    '<p class="title" style="opacity: .8">Haberler güncellenemedi</p>' +
    '<p class="description">Haberler güncellenirken bir sorunla karşılaşıldı ve güncel haberler alınamadı. Bu sorun internet bağlantınız veya haber sitesindeki yoğunluk nedeniyle olabilir.</p>' +
    '<p class="more"><a href="#">Haberleri güncellemeyi tekrar dene</a></p>';
    document.body.style.backgroundImage = 'url("img/gezi.jpg")';
  }

})();
