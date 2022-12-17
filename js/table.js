const std = 17;
const comf = 19;
const van = 21;
const tripList = [
  {
    trip: 'Дніпро — Київ',
    distance: 500,
  },

  {
    trip: 'Дніпро — Харків',
    distance: 220,
  },

  {
    trip: 'Дніпро — Одеса',
    distance: 550,
  },

  {
    trip: 'Дніпро — Львів',
    distance: 950,
  },

  {
    trip: 'Дніпро — Запоріжжя',
    distance: 100,
  },

  {
    trip: 'Дніпро — Полтава',
    distance: 200,
  },

  {
    trip: 'Дніпро — Кривий Ріг',
    distance: 150,
  },

  {
    trip: 'Дніпро — Хмельницький',
    distance: 700,
  },

  {
    trip: 'Дніпро — Кропивницький',
    distance: 250,
  },
  {
    trip: 'Дніпро - Суми',
    distance: 360,
  },
  {
    trip: 'Дніпро - Івано-Фанківськ',
    distance: 965,
  },
];

const list = document.querySelector('.js-body');
const markup = tripList
  .map(
    ({ trip, distance }) =>
      `<tr><th>${trip}</th><td>${std * distance} грн</td><td>${
        comf * distance
      } грн</td><td>${van * distance} грн</td></tr>`,
  )
  .join('');
list.insertAdjacentHTML('beforeend', markup);
