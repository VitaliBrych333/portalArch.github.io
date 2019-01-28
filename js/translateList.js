function load() {
  let myInterface;
  let content;
  fetch('../JSON/interfaceTranslate.json')
    .then(response => response.json())
    .then((myJson) => {
      myInterface = myJson;
    });

  fetch('../JSON/translateList.json')
    .then(response => response.json())
    .then((myJson) => {
      content = myJson;
    });

  function handleClickTranslate(e) {
    event.preventDefault();
    const objTranslate = myInterface.filter(obj => obj[`${e.target.innerHTML}`])[0][`${e.target.innerHTML}`];
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
    ['#name', '#main', '#list'].map(i => document.querySelector(`${i}`).innerHTML === '');
    document.querySelector('#name').innerHTML = objTranslate.name;
    document.querySelector('#main').innerHTML = objTranslate.main;
    document.querySelector('#list').innerHTML = objTranslate.list;

    const objContent = content.filter(obj => obj[`${e.target.innerHTML}`])[0][`${e.target.innerHTML}`];

    document.querySelector('#text-arch').innerHTML = objContent.searchContainer;

    document.querySelector('#search').setAttribute('placeholder', objContent.search);

    document.querySelector('#sel')[0].innerHTML = objContent.selectorOne;
    document.querySelector('#sel')[1].innerHTML = objContent.selectorTwo;
    document.querySelector('#sel')[2].innerHTML = objContent.selectorThree;

    document.querySelectorAll('.profession')[0].innerHTML = objContent.person1.name;
    document.querySelectorAll('.place_of_birth')[0].innerHTML = `${objContent.person1.place} <span data-birth="1">${objContent.person1.city}</span>`;
    document.querySelectorAll('.short_discription')[0].innerHTML = objContent.person1.discription;

    document.querySelectorAll('.profession')[1].innerHTML = objContent.person2.name;
    document.querySelectorAll('.place_of_birth')[1].innerHTML = `${objContent.person2.place} <span data-birth="1">${objContent.person2.city}</span>`;
    document.querySelectorAll('.short_discription')[1].innerHTML = objContent.person2.discription;

    document.querySelectorAll('.profession')[2].innerHTML = objContent.person3.name;
    document.querySelectorAll('.place_of_birth')[2].innerHTML = `${objContent.person3.place} <span data-birth="1">${objContent.person3.city}</span>`;
    document.querySelectorAll('.short_discription')[2].innerHTML = objContent.person3.discription;

    document.querySelectorAll('.profession')[3].innerHTML = objContent.person4.name;
    document.querySelectorAll('.place_of_birth')[3].innerHTML = `${objContent.person4.place} <span data-birth="1">${objContent.person4.city}</span>`;
    document.querySelectorAll('.short_discription')[3].innerHTML = objContent.person4.discription;

    document.querySelectorAll('.profession')[4].innerHTML = objContent.person5.name;
    document.querySelectorAll('.place_of_birth')[4].innerHTML = `${objContent.person5.place} <span data-birth="1">${objContent.person5.city}</span>`;
    document.querySelectorAll('.short_discription')[4].innerHTML = objContent.person5.discription;

    document.querySelectorAll('.profession')[5].innerHTML = objContent.person6.name;
    document.querySelectorAll('.place_of_birth')[5].innerHTML = `${objContent.person6.place} <span data-birth="1">${objContent.person6.city}</span>`;
    document.querySelectorAll('.short_discription')[5].innerHTML = objContent.person6.discription;
  }

  function moveNav(e) {
    // event.preventDefault();
    document.querySelector('.active').classList.remove('active');
    e.target.parentNode.classList.add('active');
  }

  document.querySelectorAll('#langs a').forEach(i => i.addEventListener('click', handleClickTranslate));
  document.querySelectorAll('nav a').forEach(i => i.addEventListener('click', moveNav));
}
