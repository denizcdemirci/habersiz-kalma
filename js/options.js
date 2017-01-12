var h = [['hur','gundem','Gündem'],['hur','dunya','Dünya'],['hur','ekonomi','Ekonomi'],['hur','spor','Spor'],['hur','saglik','Sağlık'],['hur','teknoloji','Teknoloji'],['hur','magazin','Magazin'],['hur','astroloji','Astroloji'],['ntv','gundem','Gündem'],['ntv','turkiye','Türkiye'],['ntv','dunya','Dünya'],['ntv','ekonomi','Ekonomi'],['ntv','spor','Spor'],['ntv','yasam','Yaşam'],['ntv','saglik','Sağlık'],['ntv','teknoloji','Teknoloji'],['ntv','emlak','Emlak'],['ntv','sanat','Sanat'],['ntv','egitim','Eğitim'],['cnn','all','Gündem'],['cnn','turkiye','Türkiye'],['cnn','dunya','Dünya'],['cnn','ekonomi','Ekonomi'],['cnn','spor','Spor'],['cnn','yasam','Yaşam'],['cnn','saglik','Sağlık'],['cnn','bilim-teknoloji','Bilim Teknoloji'],['cnn','magazin','Magazin'],['cnn','kultur-sanat','Kültür Sanat'],['bbc','turkce','Türkçe']];
$.each(h, function(i, v) {
  $('.' + v[0]).append('<input type="radio" name="options" id=' + i + ' value="' + v[0] + '#' + v[1] + '"><label for=' + i + '>' + v[2] + '</label>');
});
$('input[value="' + localStorage.options + '"]').prop('checked', true);
$('input').click(function() {
  if ($(this).is(':checked')) {
    localStorage.options = $(this).val();
    getNews();
  }
});
