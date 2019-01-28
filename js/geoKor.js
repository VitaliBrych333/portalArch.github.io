const mymap = L.map('mapid').setView([53.902659, 27.563702], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxlaC1wcmFub3ZpY2giLCJhIjoiY2pyZGwzYWtpMGJtcDRhczJmZWI0am9iaCJ9.etTCwf72JdgNf5rOOON2hA', {
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);

L.marker([53.8964, 27.5514]).addTo(mymap)
  .bindPopup('<b>Главный почтамт</b>');

L.marker([53.90865, 27.57509]).addTo(mymap)
  .bindPopup('<b>Монумент Победы</b>');

// mymap.on('click', onMapClick);
