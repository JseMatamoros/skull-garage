$(document).ready(function() {
    $(window).scroll(function() {
      const navbar = $(".navbar");
      if ($(window).scrollTop() > 0) {
        navbar.addClass("expanded");
      } else {
        navbar.removeClass("expanded");
      }
    });
  });
// testing wathsapp web and mobile

$(document).ready(function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroDueño = "56982006503"; // Reemplaza con el número del dueño
    
    var whatsappLink = isMobile ? "https://wa.me/" + numeroDueño : "https://web.whatsapp.com/send?phone=" + numeroDueño;
    
    $(".wathsapp-link").attr("href", whatsappLink);
});

