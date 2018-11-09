$(document).ready(function() { // all code after
  loadInserts();
  var language = sessionStorage.getItem('language');
  if (language == 'NL'){
    switchToNL();
  }else{
    switchToEN();
  }
}); //close document ready

function loadInserts(){
  var baseurl = window.location.origin;
  $('menu').load(baseurl + '/inserts/menu.html');
  $('footer').load(baseurl + '/inserts/footer.html');
  // $('.EN').hide();
}

  $(document).on('click', '#menuHamburger', function(){
    if ($('#menuLinks').hasClass('menuLinksHide')){
      $('#menuLinks').removeClass('menuLinksHide').addClass('menuLinksShow');
    }else{
      $('#menuLinks').removeClass('menuLinksShow').addClass('menuLinksHide');
    }
  });

  $(document).on('click', '.languageEN', function(){
    switchToEN();
  });

  $(document).on('click', '.languageNL', function(){
    switchToNL();
  });

  function sameHeight(){
    var maxHeight = 0;
  $('.sameHeight').children().each(function(){
    var thisHeight = $(this).height();
    maxHeight = Math.max(maxHeight, thisHeight);
  });
  $('.sameHeight').children().each(function(){
    $(this).height(maxHeight);
  });
  }

  function switchToEN(){
    $('.EN').removeClass('hide');
    $('.NL').addClass('hide');
    sessionStorage.setItem('language', 'EN');
  }
  function switchToNL(){
    $('.NL').removeClass('hide');
    $('.EN').addClass('hide');
    sessionStorage.setItem('language', 'NL');
  }
