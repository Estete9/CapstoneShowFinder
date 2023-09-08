import InvolvementApi from './InvolvementApi.js';

const addNewLike = () => {
  const heartButtons = document.getElementsByClassName('cardboard-heart-button');
  for (let i = 0; i < heartButtons.length; i += 1) {
    heartButtons[i].addEventListener('click', (event) => {
      const involvementApi = new InvolvementApi();
      involvementApi.postLike(event.target.parentElement.parentElement.parentElement.id);
    });
  }
};

export default addNewLike;
