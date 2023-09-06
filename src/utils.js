const fullPath = 'https://api.tvmaze.com/shows';

const getAllShows = async () => {
  try {
    const response = await fetch(fullPath);
    if (!response.ok) {
      throw new Error('Failed to create a post.');
    }
    const showsResponse = await response.json();
    return showsResponse;
  } catch (error) {
    return error.message;
  }
};

const result = await getAllShows();
const qtyShows = result.length;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const selectedIndex = [];
for (let i = 0; i < 9; i += 1) {
  selectedIndex.push(getRandomInt(qtyShows));
}

const selectedShows = [];
selectedIndex.forEach((element) => selectedShows.push(result[element]));

const imgCards = document.getElementsByClassName('cardboard-image');
const titleCards = document.getElementsByClassName('cardboard-title');
const liCards = document.getElementsByClassName('cardboard');

const populateCards = () => {
  for (let i = 0; i < titleCards.length; i += 1) {
    titleCards[i].innerHTML = selectedShows[i].name;
    imgCards[i].src = selectedShows[i].image.medium;
    liCards[i].id = selectedShows[i].id;
  }
};

export default populateCards;
