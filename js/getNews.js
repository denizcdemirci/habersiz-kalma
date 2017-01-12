function getNews() {
  var a = [], o = localStorage.options.split('#'), i, s = {
    hur: {id: 'hur', source: 'http://www.hurriyet.com.tr/rss/' + o[1], data: 'item', title: 'title', description: 'description', link: 'link'},
    ntv: {id: 'ntv', source: 'http://www.ntv.com.tr/' + o[1] + '.rss', data: 'entry', title: 'title', description: 'summary', image: 'content', link: 'id'},
    cnn: {id: 'cnn', source: 'http://www.cnnturk.com/feed/rss/' + o[1] + '/news', data: 'item', title: 'title', description: 'description', image: 'image', link: 'link'},
    bbc: {id: 'bbc', source: 'http://feeds.bbci.co.uk/' + o[1] + '/rss.xml', data: 'item', title: 'title', description: 'description', link: 'link'}
  };
  $.get(s[o[0]]['source']).done(function(data) {
    $(data).find(s[o[0]]['data']).each(function() {
      if (s[o[0]]['id'] == 'hur' || s[o[0]]['id'] == 'bbc') {
        i = $(this).find('media\\:thumbnail, thumbnail').attr('url');
      }
      if (s[o[0]]['id'] == 'ntv') {
        i = /\ src="(.*?)\?width/.exec($(this).find(s[o[0]]['image']).text())[1];
      }
      if (s[o[0]]['id'] == 'cnn') {
        i = $(this).find(s[o[0]]['image']).text();
      }
      a.push ({
        title: $(this).find(s[o[0]]['title']).text(),
        description: $(this).find(s[o[0]]['description']).text(),
        image: i,
        link: $(this).find(s[o[0]]['link']).text()
      });
    });
    localStorage.news = JSON.stringify(a);
  }).fail(function() {
    if (typeof localStorage.news == 'undefined' || localStorage.news == 'null') {
      a.push ({
        title: 'Haberler güncellenemedi!',
        description: 'Haberler güncellenirken bir sorunla karşılaşıldı ve güncel haberler alınamadı. Bu sorun internet bağlantınız veya haber sitesindeki yoğunluk nedeniyle olabilir. Eklenti ayarlarından başka bir haber kagetorisi seçebilirsiniz.'
      });
    }
  });
}
