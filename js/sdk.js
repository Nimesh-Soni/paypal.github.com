jQuery(function($){

  // Set Min-height for SDKs section
  function set_section_height(){
    $('.sdk-install').css({ "min-height": ($(window).height() - 150) });
  }
  set_section_height();

  $('body').scrollspy({ target: ".sidebar", offset: 200 });
  $('.sidebar').affix({});

  // Animation for service menus in sidebar
  $('#sdk-menus li').click(function(){
    var link = $(this).children('a').attr('href');
    $('html, body').animate({
        scrollTop: $(link).offset().top
    }, 400);

    _gaq.push(['_trackEvent', "Click Service", link]);
    return false
  })

  // Track tab click event using google analytics
  $('a[data-toggle="tab"]').on('shown', function (e) {
    var link = $(e.target).attr('href');
    _gaq.push(['_trackEvent', "Click Tab", link]);
  });

  function trackOutboundLink(link) {
    try {
      _gaq.push(['_trackEvent', "Outbound Links", link.href]);
      setTimeout(function() {
        document.location.href = link.href;
      }, 100);
      return false;
    } catch(err){
      return true;
    }
  }

  jQuery(document).on('click', 'a[href^="http"]', function(){
    return trackOutboundLink(this);
  })
});
