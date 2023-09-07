import getSingleShow from './getSingleShow.js';
import InvolvementApi from './InvolvementApi.js';
import placeholderImg from '../assets/poster-placeholder.png';

class CommentsPopup {
  constructor() {
    this.involvementApi = new InvolvementApi();
  }

  populateComments = async (showID, popupWrapper) => {
    const showCommentsList = popupWrapper.querySelector('#comments-list');
    const comments = await this.involvementApi.getComments(showID);

    showCommentsList.innerHTML = '';
    if (!comments.length) {
      const comment = document.createElement('li');
      comment.classList.add('comment-list-item');
      comment.innerHTML = 'There are no comments yet...';
      showCommentsList.appendChild(comment);
      return;
    }

    comments[0].forEach((comment) => {
      showCommentsList.appendChild(
        this.createListItem(comment.creation_date, comment.username, comment.comment),
      );
    });
  };

  populateCards = async (showID, popupWrapper) => {
    const show = await getSingleShow(showID);
    const showDetails = popupWrapper.querySelector('#show-details');

    popupWrapper.querySelector('#show-poster').src = show.image.medium;
    popupWrapper.querySelector('#show-title').textContent = show.name;
    showDetails.querySelector(':nth-child(1)').innerHTML = `Premiered:<br>${show.premiered}`;
    showDetails.querySelector(':nth-child(2)').innerHTML = `Status:<br>${show.status}`;
    showDetails.querySelector(':nth-child(3)').innerHTML = `Language:<br>${show.language}`;
    showDetails.querySelector(':nth-child(4)').innerHTML = `Rating:<br>${show.rating.average}`;
    this.populateComments(showID, popupWrapper);
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

  createListItem = (date, name, msg) => {
    const comment = document.createElement('li');
    comment.classList.add('comment-list-item');
    comment.innerHTML = `
    <li>${date} ${name}: ${msg}</li>
    `;
    return comment;
  };
}

export default CommentsPopup;

