const mymap = L.map('mapid').setView([53.907268, 27.562562], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxlaC1wcmFub3ZpY2giLCJhIjoiY2pyZGwzYWtpMGJtcDRhczJmZWI0am9iaCJ9.etTCwf72JdgNf5rOOON2hA', {
  maxZoom: 18,
  id: 'mapbox.streets',
}).addTo(mymap);

L.marker([53.905851, 27.566583]).addTo(mymap)
  .bindPopup('<b>Памятник Янке Купале</b>');

L.marker([53.915719, 27.58273]).addTo(mymap)
  .bindPopup('<b>Паямятник Якубу Коласу</b>');

L.marker([53.911249, 27.556785]).addTo(mymap)
  .bindPopup('<b>Троицкое предместье</b>');

L.marker([53.909910, 27.542780]).addTo(mymap)
  .bindPopup('<b>Мемориал &#171Яма&#187</b>');
L.marker([53.905890, 27.553958]).addTo(mymap)
  .bindPopup('<b>ст.м.Немига</b>');
L.marker([53.894777, 27.548228]).addTo(mymap)
  .bindPopup('<b>ст.м.Площадь Ленина</b>');


// mymap.on('click', onMapClick);
