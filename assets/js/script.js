// testing wathsapp web and mobile
$(document).ready(function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var numeroDueño = "56982006503"; // Reemplaza con el número del dueño
    
    var whatsappLink = isMobile ? "https://wa.me/" + numeroDueño : "https://web.whatsapp.com/send?phone=" + numeroDueño;
    
    $(".wathsapp-link").attr("href", whatsappLink);
});

let map = L.map('map', {
  dragging: false, // Desactivar el arrastre
  zoomControl: false, // Desactivar el control de zoom
  zoom: 12, // Nivel de zoom fijo
  minZoom: 12, // Nivel de zoom mínimo
  maxZoom: 12 // Nivel de zoom máximo
}).setView([-18.4927381, -70.3313172], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([-18.5268807, -70.2189621]).addTo(map)
  .bindPopup('Siempre disponibles, las 24 horas los 7 días de la semana!')
  .openPopup();
// fin mapa


