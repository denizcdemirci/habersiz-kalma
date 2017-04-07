function parse() {
  chrome.storage.local.get(function (r) {
    var a = [], o = r.s.split('#'), i, l, s = {
      hur: {
        id: 'hur',
        source: 'http://www.hurriyet.com.tr/rss/' + o[1],
        data: 'item',
        title: 'title',
        description: 'description',
        link: 'link'
      },
      ntv: {
        id: 'ntv',
        source: 'http://www.ntv.com.tr/' + o[1] + '.rss',
        data: 'entry',
        title: 'title',
        description: 'summary',
        image: 'content',
        link: 'link'
      },
      cnn: {
        id: 'cnn',
        source: 'http://www.cnnturk.com/feed/rss/' + o[1] + '/news',
        data: 'item',
        title: 'title',
        description: 'description',
        image: 'image',
        link: 'link'
      },
      bbc: {
        id: 'bbc',
        source: 'http://feeds.bbci.co.uk/' + o[1] + '/rss.xml',
        data: 'item',
        title: 'title',
        description: 'description',
        link: 'link'
      }
    };
    $.get(s[o[0]]['source']).done(function (d) {
      $(d).find(s[o[0]]['data']).each(function () {
        if (s[o[0]]['id'] == 'ntv') {
          i = /\ src="(.*?)\?width/.exec($(this).find(s[o[0]]['image']).text())[1];
          l = $(this).find(s[o[0]]['link']).attr('href');
        }
        else if (s[o[0]]['id'] == 'cnn') {
          i = $(this).find(s[o[0]]['image']).text();
          l = $(this).find(s[o[0]]['link']).text();
        }
        else {
          i = $(this).find('media\\:thumbnail, thumbnail').attr('url');
          l = $(this).find(s[o[0]]['link']).text();
        }
        a.push({
          s: o[0],
          i: i,
          t: $(this).find(s[o[0]]['title']).text().replace('<![CDATA[', '').replace(']]>', ''),
          d: $(this).find(s[o[0]]['description']).text().replace('<![CDATA[', '').replace(']]>', '').replace(/(<([^>]+)>)/ig, ''),
          l: l
        });
      });
      chrome.storage.local.set({
        'a': JSON.stringify(a)
      });
    });
  });
}
