const IdAuthor = document.querySelector('.wrapper').getAttribute('data-list');

fetch('../json/content.json')
  .then(response => response.json())
  .then((res) => {
    init(res);
  });

function init(arrayOfDataAboutArchitect) {
  const listOfProducts = document.getElementById('product-list');
  const builds = arrayOfDataAboutArchitect[IdAuthor].build;

  builds.forEach((value) => {
    const item = document.createElement('li');
    item.textContent = value;
    listOfProducts.appendChild(item);
  });

  const arrayOfImg = arrayOfDataAboutArchitect[IdAuthor].img;
  const slider = document.getElementById('photo-slider');
  arrayOfImg.forEach((element) => {
    const container = document.createElement('div');
    slider.appendChild(container);
    const photo = document.createElement('img');
    photo.src = element;
    photo.className = 'element-slider';
    container.appendChild(photo);
  });

  const personPhoto = document.getElementById('person-photo');
  personPhoto.src = arrayOfDataAboutArchitect[IdAuthor].photo;
  const name = document.getElementById('name-architect');
  name.textContent = arrayOfDataAboutArchitect[IdAuthor].name;

  const timeline = document.getElementById('timeline-component');
  timeline.src = arrayOfDataAboutArchitect[IdAuthor].link;

  $('#js-overlay').data('url', arrayOfDataAboutArchitect[IdAuthor].video).attr('data-url', arrayOfDataAboutArchitect[IdAuthor].video);
  const video = document.getElementById('js-overlay');
  video.innerHTML = arrayOfDataAboutArchitect[IdAuthor].name;
}

$(document).ready(() => {
  $('.slider').slick();
});


$('.js-overlay-start').unbind('click').bind('click', function click(e) {
  event.preventDefault();
  const src = $(this).attr('data-url');
  $('.overlay-video').show();
  setTimeout(() => {
    $('.overlay-video').addClass('o1');
    $('#player').attr('src', src);
  }, 100);
});

$('.overlay-video').click((event) => {
  if (!$(event.target).closest('.videoWrapperExt').length) {
    const PlayingVideoSrc = $('#player').attr('src').replace('&autoplay=1', '');
    $('#player').attr('src', PlayingVideoSrc);
    $('.overlay-video').removeClass('o1');
    setTimeout(() => {
      $('.overlay-video').hide();
    }, 600);
  }
});

$('.close').click((event) => {
  const PlayingVideoSrc = $('#player').attr('src').replace('&autoplay=1', '');
  $('#player').attr('src', PlayingVideoSrc);
  $('.overlay-video').removeClass('o1');
  setTimeout(() => {
    $('.overlay-video').hide();
  }, 600);
  location.reload();
});
