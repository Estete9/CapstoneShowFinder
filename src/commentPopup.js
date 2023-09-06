const commentPopup = (e, popupWrapper, cardboards) => {
  const card = e.target.parentNode;
  popupWrapper.classList.remove('hide');
  cardboards.classList.add('hide');
};

export default commentPopup;



