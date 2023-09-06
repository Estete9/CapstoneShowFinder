import './style.css';
import showPoster from '../assets/poster-placeholder.png';
import closeBtn from '../assets/close-btn.png';
import heart from '../assets/heart.png';
import createCards from './cards.js';
import populateCards from './utils.js';

const showPosterImg = document.getElementById('show-poster');
const PopupCloseBtn = document.getElementById('close-btn');
const imgHearts = document.getElementsByClassName('cardboard-heart-image');

showPosterImg.src = showPoster;
PopupCloseBtn.src = closeBtn;

createCards();

// Loading images heart like
Array.from(imgHearts).forEach((item) => {
  item.src = heart;
});

populateCards();
