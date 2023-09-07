const createCards = (commentPopup, popupWrapper, cardboards) => {
  for (let i = 0; i < 9; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('class', 'cardboard');

    const img1 = document.createElement('img');
    img1.setAttribute('class', 'cardboard-image');
    img1.setAttribute('alt', 'img');
    img1.setAttribute('src', '');

    const div1 = document.createElement('div');
    div1.setAttribute('class', 'cardboard-superior');

    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'cardboard-title');

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'cardboard-inferior');

    const img2 = document.createElement('img');
    img2.setAttribute('class', 'cardboard-heart-image');
    img2.setAttribute('alt', 'img');
    img2.setAttribute('src', '');

    const p = document.createElement('p');
    p.setAttribute('class', 'cardboard-likes');
    p.innerHTML = '0 likes';

    const buttonComments = document.createElement('button');
    buttonComments.setAttribute('class', 'comments-button');
    buttonComments.innerHTML = 'Comments';
    buttonComments.addEventListener('click', (e) => {
      commentPopup.openPopup(e, popupWrapper, cardboards);
    });

    const buttonReservations = document.createElement('button');
    buttonReservations.setAttribute('class', 'reservations-button');
    buttonReservations.innerHTML = 'Reservations';

    div2.appendChild(img2);
    div2.appendChild(p);
    div1.appendChild(h3);
    div1.appendChild(div2);
    li.appendChild(img1);
    li.appendChild(div1);
    li.appendChild(buttonComments);
    li.appendChild(buttonReservations);
    cardboards.appendChild(li);
  }
};

export default createCards;
