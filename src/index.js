import './style.css';
import heart from '../assets/heart.png';
import createCards from './cards.js';
import populateCards from './utils.js';

createCards();

// Loading images heart like
const imgHearts = document.getElementsByClassName('cardboard-heart-image');
Array.from(imgHearts).forEach((item) => {
  item.src = heart;
});

populateCards();
