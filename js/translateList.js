let newInterface = '';

function translate() {
  fetch('../JSON/translateList.json').then(response => response.json())
    .then((myJson) => {
      newInterface = myJson;
    });
}

function handleClickTranslate(e) {
  let count = 0;
  const objTranslate = newInterface.filter(obj => obj[`${e.target.innerHTML}`])[0][`${e.target.innerHTML}`];
  document.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
  document.querySelector('#name').innerHTML = objTranslate.name;
  document.querySelector('#main').innerHTML = objTranslate.main;
  document.querySelector('#list').innerHTML = objTranslate.list;
  if (document.querySelector('#intro')) {
    document.querySelector('#intro').innerHTML = objTranslate.searchContainer;
    document.querySelector('#filter').innerHTML = objTranslate.selectorOne;
    document.querySelector('#filter').value = objTranslate.selectorOne;
    document.querySelector('#optionName').innerHTML = objTranslate.selectorTwo;
    document.querySelector('#optionName').value = objTranslate.selectorTwo;
    document.querySelector('#optionPlace').innerHTML = objTranslate.selectorThree;
    document.querySelector('#optionPlace').value = objTranslate.selectorThree;
    document.querySelector('input').placeholder = objTranslate.placeholder;
    startSearch();
    document.querySelectorAll('.short_discription').forEach(item => {
      item.innerHTML = objTranslate.persons[count].discription;
      count++;
      if (count > 5) {
        count = 0;
      }
    });
    dataElements.persons.forEach(item => {
      item.innerHTML = objTranslate.persons[count].name;
      count++;
      if (count > 5) {
        count = 0;
      }
    });
    document.querySelectorAll('.place_of_birth').forEach(item => {
      item.innerHTML = `${objTranslate.persons[count].place} <span data-birth="${count + 1}">${objTranslate.persons[count].city}</span>`;
      count++;
      if (count > 5) {
        count = 0;
      }
    });
    dataElements.places = document.querySelectorAll('[data-birth]');
  }
}

function moveNav(e) {
  document.querySelector('.active').classList.remove('active');
  e.target.parentNode.classList.add('active');
}

document.querySelectorAll('#langs a').forEach(i => i.addEventListener('click', handleClickTranslate));

document.querySelectorAll('nav a').forEach(i => i.addEventListener('click', moveNav));

translate();
