var articleSubject = localStorage.articleSubject;
var articleImage = localStorage.articleImage;
var articleImageSetting = '';
var quickSetting = localStorage.quickSetting;
var images = ['anitkabir', 'bogazici', 'gezi', 'istanbul', 'kizkulesi', 'saatkulesi'];

var image = images[Math.floor(Math.random() * images.length)];
$('body').css('background-image', 'url("img/' + image + '.jpg")');

if (typeof articleSubject == 'undefined' || articleSubject == 'null') {
  localStorage.articleSubject = 'turkiye';
}

$('.subject').change(function() {
  localStorage.articleSubject = $('.settings input[name=subjectChoice]:checked').val();
  if (quickSetting == 'true') {
    chrome.browserAction.setIcon({
      path: 'img/' + $('.settings input[name=subjectChoice]:checked').val() + '.png'
    });
  }
});

$('.settings input[name=subjectChoice][value=' + articleSubject + ']').prop('checked', true);

if (typeof quickSetting == 'undefined' || quickSetting == 'null') {
  localStorage.quickSetting = 'false';
}

$('.quickSetting').change(function() {
  if (localStorage.quickSetting == 'false') {
    localStorage.quickSetting = 'true';
  }
  else {
    localStorage.quickSetting  = 'false';
  }
});

if (quickSetting == 'false') {
  $('.settings input[name=quickSetting]').prop('checked', false);
}
else {
  $('.settings input[name=quickSetting]').prop('checked', true);
}

if (typeof articleImage == 'undefined' || articleImage == 'null') {
  localStorage.articleImage = 'high';
}

if (articleImageSetting == '') {
  articleImageSetting = localStorage.articleImage;
}

$('.image').change(function() {
  if (articleImageSetting == 'high') {
    articleImageSetting = 'low';
    localStorage.articleImage = 'low';
  }
  else {
    articleImageSetting = 'high';
    localStorage.articleImage = 'high';
  }
});

if (articleImage == 'high') {
  $('.settings input[name=imageQuality]').prop('checked', true);
}
else {
  $('.settings input[name=imageQuality]').prop('checked', false);
}
