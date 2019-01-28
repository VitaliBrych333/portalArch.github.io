const mymap = L.map('mapid').setView([53.897278, 27.55478], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxlaC1wcmFub3ZpY2giLCJhIjoiY2pyZGwzYWtpMGJtcDRhczJmZWI0am9iaCJ9.etTCwf72JdgNf5rOOON2hA', {
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);

L.marker([53.898863, 27.554719]).addTo(mymap)
  .bindPopup('<b>Административное здание  КГБ Беларуси</b>');

L.marker([53.900141, 27.558957]).addTo(mymap)
  .bindPopup('<b>Госбанк БССР </b>');

L.marker([53.895029, 27.559889]).addTo(mymap)
  .bindPopup('<b>Спортивный комплекс &#171Динамо&#187 </b>');

// mymap.on('click', onMapClick);
