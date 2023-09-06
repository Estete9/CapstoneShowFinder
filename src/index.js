import './style.css';
import imgPlaceholder from '../assets/poster-placeholder.png';
import closeBtn from '../assets/close-btn.png';
import heart from '../assets/heart.png';
import createCards from './cards.js';
import populateCards from './utils.js';
import CommentsPopup from './commentPopup.js';

const showPosterImg = document.getElementById('show-poster');
const popupCloseBtn = document.getElementById('close-btn');
const imgHearts = document.getElementsByClassName('cardboard-heart-image');
const commentsPopup = new CommentsPopup();
const popupWrapper = document.getElementById('comments-popup-wrapper');
const cardboards = document.getElementById('cardboards');

showPosterImg.src = imgPlaceholder;
popupCloseBtn.src = closeBtn;
popupCloseBtn.onclick = () => commentsPopup.closePopup(popupWrapper, cardboards);
createCards(commentsPopup, popupWrapper, cardboards);

// Loading images heart like
Array.from(imgHearts).forEach((item) => {
  item.src = heart;
});

populateCards();
