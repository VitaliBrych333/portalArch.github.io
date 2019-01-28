const mymap = L.map('mapid').setView([53.907648, 27.574317], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxlaC1wcmFub3ZpY2giLCJhIjoiY2pyZGwzYWtpMGJtcDRhczJmZWI0am9iaCJ9.etTCwf72JdgNf5rOOON2hA', {
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);

L.marker([53.910, 27.561]).addTo(mymap)
  .bindPopup('<b>Оперный театр</b>');

L.marker([53.902, 27.565]).addTo(mymap)
  .bindPopup('<b>Дом офицеров</b>');

L.marker([53.920718, 27.597849]).addTo(mymap)
  .bindPopup('<b>Академия наук</b>');

L.marker([53.896, 27.545]).addTo(mymap)
  .bindPopup('<b>Дом правительства</b>');

// mymap.on('click', onMapClick);
