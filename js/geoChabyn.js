const mymap = L.map('mapid').setView([52.430478, 31.003839], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxlaC1wcmFub3ZpY2giLCJhIjoiY2pyZGwzYWtpMGJtcDRhczJmZWI0am9iaCJ9.etTCwf72JdgNf5rOOON2hA', {
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);

L.marker([52.432157, 31.003991]).addTo(mymap)
  .bindPopup('<b>Здание бывшей гомельской Александровской мужской гимназии</b>');

L.marker([52.429043, 31.00608]).addTo(mymap)
  .bindPopup('<b>Бывший дом гомельского доктора Н.И.Александрова.</b>');

L.marker([52.430358, 31.010969]).addTo(mymap)
  .bindPopup('<b>Здание бывшего Орловского коммерческого банка</b>');

L.marker([52.428248, 31.013175]).addTo(mymap)
  .bindPopup('<b>Здание бывшего Виленского коммерческого банка</b>');

L.marker([52.430181, 30.996197]).addTo(mymap)
  .bindPopup('<b>Дом-коммуна по пр. Ленина</b>');

// mymap.on('click', onMapClick);
