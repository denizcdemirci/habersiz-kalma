chrome.browserAction.onClicked.addListener(function() {
  var quickSetting = localStorage.quickSetting;
  var articleSubject = localStorage.articleSubject;
  var articles = ['gundem', 'turkiye', 'dunya', 'spor', 'ekonomi', 'teknoloji', 'sanat', 'saglik', 'yasam'];
  var current = articles.indexOf(articleSubject) + 1;

  if (quickSetting == 'true') {
    localStorage.articleSubject = articles[current];
    chrome.browserAction.setIcon({
      path: 'img/' + articles[current] + '.png'
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: '#222'
    });
    chrome.browserAction.setBadgeText({
      text: articles[current]
    });
    setTimeout(function(){
      chrome.browserAction.setBadgeText({
        text: ''
      });
    }, 1000);
    current++;
    if (current > (articles.length - 1)) {
      current = 0;
    }
  }
  else {
    chrome.tabs.create({
      url: 'chrome://newtab'
    });
  }
});

chrome.browserAction.setIcon({
  path: 'img/' + localStorage.articleSubject + '.png'
});
