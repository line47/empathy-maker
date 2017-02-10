var names = [
// African
  'Ajani',
  'Sha-Mia',
// Arabic
  'Hasan',
  'Salim',
  'Cala',
  'Nima',
// Italian
  'Angelo',
  'Carlo',
  'Maria',
  'Rosa',
// French
  'Louis',
  'Jean-Paul',
  'Gabrielle',
  'Yvette',
// German
  'Otto',
  'Roger',
  'Heidi',
  'Emma',
// Polish
  'Bogdan',
  'Jacek',
  'Mirka',
  'Krysta',
// Russian
  'Pavel',
  'Oleg',
  'Nadya',
  'Tatiana',
// English
  'Arthur',
  'Roland',
  'Andie',
  'Becky',
// African
  'Umi',
  'Hamadi',
  'Aisha',
  'Taliba',
// Spanish
  'Diego',
  'Julio',
  'Carmen',
  'Mariposa',
// Asian
  'Chang',
  'Jin',
  'Ming',
  'Tam',
// Hebrew
  'Abe',
  'Isaac',
  'Naomi',
  'Sophie',
// Native American
  'Achak',
  'Moketavato',
  'Chenoa',
  'Halona',
];

function makeDisability(options) {
  options.img = 'img/' + options.id + '.png';
  // if (options.type !== TOUCH || options.type !== BLARG) {
  //   throw Exception('type ' + options.type + ' is not valid!');
  // }
  return options;
}

// Physical disability senses/categories
var TOUCH = 'touch';
var SEE = 'see';
var HEAR = 'hear';
var SPEAK = 'speak';
var MIND = 'mind';

// Emotional senses/categories
var HAPPY = 'happy';
var LOVING = 'loving';
var INTERESTED = 'interested';
var POSITIVE = 'positive';
var PEACEFUL = 'peaceful';
var STRONG = 'strong';
var RELAXED = 'relaxed';
var ANGRY = 'angry';
var DEPRESSED = 'depressed';
var CONFUSED = 'confused';
var HELPLESS = 'helpless';
var AFRAID = 'afraid';
var HURT = 'hurt';
var SAD = 'sad';

var disabilities = [
  makeDisability({
    id: 'one-arm',
    type: TOUCH,
    description: 'has one arm'
  }),
  makeDisability({
    id: 'arm-injury',
    type: TOUCH,
    description: 'has an arm injury'
  }),
  makeDisability({
    id: 'holding-baby',
    type: TOUCH,
    description: 'is holding a baby'
  }),
  makeDisability({
    id: 'blind',
    type: SEE,
    description: 'is blind'
  }),
  makeDisability({
    id: 'cataracts',
    type: SEE,
    description: 'has cataracts'
  }),
  makeDisability({
    id: 'distracted-driver',
    type: SEE,
    description: 'is a distracted driver'
  }),
  makeDisability({
    id: 'deaf',
    type: HEAR,
    description: 'is deaf'
  }),
  makeDisability({
    id: 'ear-infection',
    type: HEAR,
    description: 'has an ear infection'
  }),
  makeDisability({
    id: 'non-verbal',
    type: SPEAK,
    description: 'is non-verbal'
  }),
  makeDisability({
    id: 'laryngitis',
    type: SPEAK,
    description: 'has laryngitis'
  }),
  makeDisability({
    id: 'heavy-accent',
    type: SPEAK,
    description: 'has a heavy accent'
  })
];

var physicalContext = [
  'at home',
  'in the wilderness',
  'on a bus',
  'in a car',
  'at the city center'
];

var colors = [
  '#e1f3f8',
  '#f9dede',
  '#fff1d2',
  '#e7f4e4',
  '#dce4ef'
]

function newMessage() {
  function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  var disability = getRandomItem(disabilities);
  var message = getRandomItem(names) + ' ';
  message += disability.description; // Run getRandomItem twice
  message += ' ' + 'and is' + ' ';
  message += getRandomItem(physicalContext) + '.';
  return {
    html: message,
    disability: disability
  };
}

document.body.onload = addElement;

function addElement() {
  // create a new div element
  // and give it some content
  var message = newMessage();
  var listItem = document.createElement('li');
  listItem.className = 'stack__item';
  // listItem.setAttribute('aria-hidden', true);
  var imageSrc = message.disability.img;
  var heading = document.createElement('p');
  heading.className = 'stack__item-text';
  heading.innerHTML = message.html; // add the message to the newly created div.

  listItem.appendChild(heading);
  listItem.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  listItem.style.backgroundImage = 'url("' + imageSrc + '")';

  // add the newly created element and its content into the DOM
  var list = document.getElementById('stack_yuda');
  // document.body.insertBefore(listItem, list);
  list.appendChild(listItem);
}

// Create 100 cards
var times = 100;
for(var i=0; i < times; i++) {
  addElement();
}
