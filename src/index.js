import './style.css';
import heart from '../assets/heart.png';

const fullPath = 'https://api.tvmaze.com/shows';

// Loading images heart like
const imgHearts = document.getElementsByClassName('cardboard-heart-image');

for (let i = 0; i < imgHearts.length; i += 1) {
  imgHearts[i].src = heart;
}

const getAllShows = async () => {
  try {
    const response = await fetch(fullPath);
    if (!response.status) {
      throw new Error('Failed to create a post.');
    }
    const leaderboardResponse = await response.json();
    return leaderboardResponse;
  } catch (error) {
    return error.message;
  }
};

const result = await getAllShows();
const qtyShows = result.length;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const selectedIndex = [];
for (let i = 0; i < 9; i += 1) {
  selectedIndex.push(getRandomInt(qtyShows));
}

const selectedShows = [];
selectedIndex.forEach((element) => selectedShows.push(result[element]));

const imgCards = document.getElementsByClassName('cardboard-image');
const titleCards = document.getElementsByClassName('cardboard-title');
for (let i = 0; i < titleCards.length; i += 1) {
  titleCards[i].innerHTML = selectedShows[i].name;
  imgCards[i].src = selectedShows[i].image.medium;
}
