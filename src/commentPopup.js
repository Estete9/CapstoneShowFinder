import getSingleShow from './getSingleShow.js';
import placeholderImg from '../assets/poster-placeholder.png';

class CommentsPopup {
  populateCards = async (showID, popupWrapper) => {
    const show = await getSingleShow(showID);
    popupWrapper.querySelector('#show-poster').src = show.image.medium;
    popupWrapper.querySelector('#show-title').textContent = show.name;
    const showDetails = popupWrapper.querySelector('#show-details');
    showDetails.querySelector(':nth-child(1)').innerHTML = `Premiered:<br>${show.premiered}`;
    showDetails.querySelector(':nth-child(2)').innerHTML = `Status:<br>${show.status}`;
    showDetails.querySelector(':nth-child(3)').innerHTML = `Language:<br>${show.language}`;
    showDetails.querySelector(':nth-child(4)').innerHTML = `Rating:<br>${show.rating.average}`;
  };

  openPopup = (e, popupWrapper, cardboards) => {
    popupWrapper.querySelector('#show-poster').src = placeholderImg;
    const card = e.target.parentNode;
    popupWrapper.classList.remove('hide');
    cardboards.classList.add('hide');
    this.populateCards(card.id, popupWrapper);
  };

  closePopup = (popupWrapper, cardboards) => {
    popupWrapper.classList.add('hide');
    cardboards.classList.remove('hide');
  };
}

export default CommentsPopup;

