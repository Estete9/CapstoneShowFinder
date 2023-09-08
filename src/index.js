import './style.css';
import imgPlaceholder from '../assets/poster-placeholder.png';
import closeBtn from '../assets/close-btn.png';
import createCards from './cards.js';
import populateCards from './utils.js';
import reservations from './modules/reservations.js';
import CommentsPopup from './commentPopup.js';
import addNewLike from './addNewLike.js';

const showPosterImg = document.getElementById('show-poster');
const popupCloseBtn = document.getElementById('close-btn');
const commentsPopup = new CommentsPopup();
const popupWrapper = document.getElementById('comments-popup-wrapper');
const cardboards = document.getElementById('cardboards');

showPosterImg.src = imgPlaceholder;
popupCloseBtn.src = closeBtn;
popupCloseBtn.onclick = () => commentsPopup.closePopup(popupWrapper, cardboards);
createCards(commentsPopup, popupWrapper, cardboards);

const imgCards = document.getElementsByClassName('cardboard-image');
const titleCards = document.getElementsByClassName('cardboard-title');
const liCards = document.getElementsByClassName('cardboard');
const reservationsBtn = document.getElementsByClassName('reservations-button');
populateCards(titleCards, imgCards, liCards, reservationsBtn);

reservations();

addNewLike();
