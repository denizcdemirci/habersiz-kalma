chrome.storage.local.get(function (r) {
  if (typeof r.a == 'undefined') {
    $('.background-gradient').css('opacity', '1');
    var a = [{
      't': 'Eklentiyi yüklediğiniz için teşekkürler',
      'd': 'Eklentiyi ilk kez kullanacağınız için öncelikle bir haber kaynağı seçerek işe başlayabilirsiniz.'
    }];
    $('.article footer').hide();
    $('.source-options').show();
  }
  else {
    var a = JSON.parse(r.a);
    console.table(a);
  }
  var ra = a[Math.floor(Math.random() * a.length)], o1 = r.o1, o2 = r.o2, o3 = r.o3, h = [['hur', 'gundem', 'Gündem'], ['hur', 'dunya', 'Dünya'], ['hur', 'ekonomi', 'Ekonomi'], ['hur', 'spor', 'Spor'], ['hur', 'saglik', 'Sağlık'], ['hur', 'teknoloji', 'Teknoloji'], ['hur', 'magazin', 'Magazin'], ['hur', 'astroloji', 'Astroloji'], ['ntv', 'gundem', 'Gündem'], ['ntv', 'turkiye', 'Türkiye'], ['ntv', 'dunya', 'Dünya'], ['ntv', 'ekonomi', 'Ekonomi'], ['ntv', 'spor', 'Spor'], ['ntv', 'yasam', 'Yaşam'], ['ntv', 'saglik', 'Sağlık'], ['ntv', 'teknoloji', 'Teknoloji'], ['ntv', 'emlak', 'Emlak'], ['ntv', 'sanat', 'Sanat'], ['ntv', 'egitim', 'Eğitim'], ['cnn', 'all', 'Gündem'], ['cnn', 'turkiye', 'Türkiye'], ['cnn', 'dunya', 'Dünya'], ['cnn', 'ekonomi', 'Ekonomi'], ['cnn', 'spor', 'Spor'], ['cnn', 'yasam', 'Yaşam'], ['cnn', 'saglik', 'Sağlık'], ['cnn', 'bilim-teknoloji', 'Bilim - Teknoloji'], ['cnn', 'magazin', 'Magazin'], ['cnn', 'kultur-sanat', 'Kültür Sanat'], ['bbc', 'turkce', 'Türkçe'], ['bbc', 'news/world', 'World (İngilizce)']];
  $('.source-logo').attr('src', 'img/' + ra.s + '.png');
  $('.article .title').append(ra.t);
  $('.article .description').append(ra.d);
  $('.article footer').append('<a class="read-more" href=' + ra.l + '>Devamını Oku</a>');
  $.each(h, function (i, v) {
    $("." + v[0]).append('<div class="form-group"><input type="radio" name="options" id=' + i + ' value="' + v[0] + '#' + v[1] + '"><label for=' + i + '>' + v[2] + '</label></div>');
  });
  $('.source-options input[value="' + r.s + '"]').prop('checked', true);
  $('.source-options input').click(function () {
    if ($(this).is(':checked')) {
      $('.band .band-navigation ul li.saved').fadeIn('fast').delay(1500).fadeOut('fast');
      chrome.storage.local.set({
        's': $(this).val()
      });
      parse();
    }
  });
  if (typeof o1 == 'undefined' || o1 == true) {
    option('image-on', ra.i);
  }
  else {
    option('image-off');
  }
  $('.options input[name="image"]').prop('checked', o1);
  $('.options input[name="image"]').click(function () {
    if ($(this).is(':checked')) {
      option('image-on', ra.i);
      chrome.storage.local.set({
        'o1': true
      });
    }
    else {
      option('image-off');
      chrome.storage.local.set({
        'o1': false
      });
    }
  });
  if (typeof o2 == 'undefined' || o2 == false) {
    option('color-off');
  }
  else {
    option('color-on');
  }
  $('.options input[name="color"]').prop('checked', o2);
  $('.options input[name="color"]').click(function () {
    if ($(this).is(':checked')) {
      option('color-on');
      chrome.storage.local.set({
        'o2': true
      });
    }
    else {
      option('color-off');
      chrome.storage.local.set({
        'o2': false
      });
    }
  });
  if (typeof o3 == 'undefined' || o3 == true) {
    option('background-on');
  }
  else {
    option('background-off');
  }
  $('.options input[name="background"]').prop('checked', o3);
  $('.options input[name="background"]').click(function () {
    if ($(this).is(':checked')) {
      option('background-on');
      chrome.storage.local.set({
        'o3': true
      });
    }
    else {
      option('background-off');
      chrome.storage.local.set({
        'o3': false
      });
    }
  });
});
$('.source-logo').click(function () {
  $('.source-options').fadeIn(50);
});
$('.options-button').click(function () {
  $('.options').fadeIn(50);
});
$('body').click(function (e) {
  if (e.target.className !== 'source-logo') {
    $('.source-options').fadeOut(50);
  }
  if (e.target.className !== 'options-button') {
    $('.options').fadeOut(50);
  }
});
function option(r, i) {
  if (r == 'image-on') {
    $('.background-image').css('background-image', 'url(' + i + ')');
    $('.background-gradient').css('opacity', '0.9');
  }
  if (r == 'image-off') {
    $('.background-image').css('background-image', 'none');
    $('.background-gradient').css('opacity', '1');
  }
  if (r == 'color-on') {
    $('.background-image').css('filter', 'none');
  }
  if (r == 'color-off') {
    $('.background-image').css('filter', 'grayscale(100%)');
  }
  if (r == 'background-on') {
    var h = new Date().getHours(), g = {
      '0': ['#181f32', '#8580a9'],
      '1': ['#181f32', '#8580a9'],
      '2': ['#181f32', '#8580a9'],
      '3': ['#181f32', '#8580a9'],
      '4': ['#3a3654', '#aa8ca5'],
      '5': ['#454c77', '#cfc4d5'],
      '6': ['#6381aa', '#e3c7c7'],
      '7': ['#6886b2', '#bee3dd'],
      '8': ['#6886b2', '#bee3dd'],
      '9': ['#6886b2', '#bee3dd'],
      '10': ['#6886b2', '#bee3dd'],
      '11': ['#6886b2', '#bee3dd'],
      '12': ['#6886b2', '#bee3dd'],
      '13': ['#6886b2', '#bee3dd'],
      '14': ['#6886b2', '#bee3dd'],
      '15': ['#6381aa', '#c7cee3'],
      '16': ['#6381aa', '#c7cee3'],
      '17': ['#625e85', '#f9bbb7'],
      '18': ['#625e85', '#f9bbb7'],
      '19': ['#625e85', '#f9bbb7'],
      '20': ['#181f32', '#8580a9'],
      '21': ['#181f32', '#8580a9'],
      '22': ['#181f32', '#8580a9'],
      '23': ['#181f32', '#8580a9']
    };
    $('.background-gradient').css('background-image', 'linear-gradient(-45deg, ' + g[h][0] + ', ' + g[h][1] + ')');
  }
  if (r == 'background-off') {
    $('.background-gradient').css({
      'background-image': 'none', 'background-color': '#222'
    });
  }
}
$('.band-logo').attr('title', 'Sürüm: ' + chrome.runtime.getManifest().version);
