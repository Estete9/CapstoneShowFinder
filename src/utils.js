import itemsCounters from './items_counter.js';

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

itemsCounters(result.length);

const getRandomInt = (max) => Math.floor(Math.random() * max);

const generateIndex = (items, max) => {
  const selectedIndex = [];
  while (selectedIndex.length < items) {
    const index = getRandomInt(max);
    if (!selectedIndex.includes(index)) {
      selectedIndex.push(index);
    }
  }
  return selectedIndex;
};
const selectedIndex = generateIndex(9, result.length);

const selectedShows = [];
selectedIndex.forEach((element) => selectedShows.push(result[element]));

const populateCards = (titleCards, imgCards, liCards, reservationsBtn) => {
  for (let i = 0; i < titleCards.length; i += 1) {
    titleCards[i].innerHTML = selectedShows[i].name;
    imgCards[i].src = selectedShows[i].image.medium;
    liCards[i].id = selectedShows[i].id;
    reservationsBtn[i].setAttribute('show_id', selectedShows[i].id);
  }
};
export const shows = selectedShows;

export default populateCards;
