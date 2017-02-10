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
  options.img = 'img/' + options.icon + '.png';
  // if (options.type !== TOUCH || options.type !== BLARG) {
  //   throw Exception('type ' + options.type + ' is not valid!');
  // }
  return options;
}

// Physical disability senses/categories
// These should be mapped to how to serve someone with this type of disability
var TOUCH = 'touch';
var SEE = 'see';
var HEAR = 'hear';
var SPEAK = 'speak';
var MIND = 'mind';


// Serving disabilites
// TOUCH
  // Test by using your non dominant hand to control your mouse, type of horld your mobile device. Can you navigate easily? Where are the pain points?
  // Test browsing with the keyboard. Can you get to every item on the page and complete all tasks with the keyboard?



// Emotional senses/categories
// These should be mapped to how to server someone feeling these emotions
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


// These were quick adds to work out some styling
var emotionalState = [
'happy',
'loving',
'interested',
'positive',
'peaceful',
'strong',
'relaxed',
'angry',
'depressed',
'confused',
'helpless',
'afraid',
'hurt',
'sad'
];

var disabilities = [
  makeDisability({
    id: 'head-injury',
    icon: 'mind',
    type: MIND,
    description: 'has a head injury'
  }),
  makeDisability({
    id: 'reading-comprehension',
    icon: 'mind',
    type: MIND,
    description: 'has a reading comprehension disability'
  }),
  makeDisability({
    id: 'dyslexia',
    icon: 'mind',
    type: MIND,
    description: 'is dyslexic'
  }),
  makeDisability({
    id: 'one-arm',
    icon: 'hand',
    type: TOUCH,
    description: 'has one arm'
  }),
  makeDisability({
    id: 'arm-injury',
    icon: 'hand',
    type: TOUCH,
    description: 'has an arm injury'
  }),
  makeDisability({
    id: 'holding-baby',
    icon: 'hand',
    type: TOUCH,
    description: 'is holding a baby'
  }),
  makeDisability({
    id: 'is-blind',
    icon: 'eye',
    type: SEE,
    description: 'is blind'
  }),
  makeDisability({
    id: 'has-cataracts',
    icon: 'eye',
    type: SEE,
    description: 'has cataracts'
  }),
  makeDisability({
    id: 'color-blind',
    icon: 'eye',
    type: SEE,
    description: 'is color blind'
  }),
  makeDisability({
    id: 'deaf',
    icon: 'ear',
    type: HEAR,
    description: 'is deaf'
  }),
  makeDisability({
    id: 'ear-infection',
    icon: 'ear',
    type: HEAR,
    description: 'has an ear infection'
  }),
  makeDisability({
    id: 'coast-guard-veteran',
    icon: 'ear',
    type: HEAR,
    description: 'is a coast guard veteran'
  }),
  makeDisability({
    id: 'non-verbal',
    icon: 'mouth',
    type: SPEAK,
    description: 'is non-verbal'
  }),
  makeDisability({
    id: 'laryngitis',
    icon: 'mouth',
    type: SPEAK,
    description: 'has laryngitis'
  }),
  makeDisability({
    id: 'heavy-accent',
    icon: 'mouth',
    type: SPEAK,
    description: 'has a heavy accent'
  })
];

var physicalContext = [
  'at home',
  'in the wilderness',
  'on a bus',
  'in a car',
  'at the city center',
  'at a coffee shop',
  'at the office',
  'at the library'
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
    message += '<span class="emotions">' + 'Feeling: ' + ' ';
  message += getRandomItem(emotionalState) + '</span>';
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
