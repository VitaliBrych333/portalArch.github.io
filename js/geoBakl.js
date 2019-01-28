const mymap = L.map('mapid').setView([53.91076, 27.586584], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxlaC1wcmFub3ZpY2giLCJhIjoiY2pyZGwzYWtpMGJtcDRhczJmZWI0am9iaCJ9.etTCwf72JdgNf5rOOON2hA', {
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);

L.marker([53.89832, 27.55105]).addTo(mymap)
  .bindPopup('<b>Театр им.М.Горького</b>');

L.marker([53.921078, 27.593000]).addTo(mymap)
  .bindPopup('<b>Белорусский национальный технический университет</b>');

L.marker([53.89391, 27.547156]).addTo(mymap)
  .bindPopup('<b>Белорусского государственного университета </b>');

L.marker([53.901361, 27.553987]).addTo(mymap)
  .bindPopup('<b>кинотеатр &#171Победа&#187</b>');

L.marker([53.927309, 27.622319]).addTo(mymap)
  .bindPopup('<b>Белорусский государственный аграрный технический университет</b>');

// mymap.on('click', onMapClick);
