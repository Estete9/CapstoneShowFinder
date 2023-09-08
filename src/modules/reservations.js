import { shows } from '../utils.js';

const reservations = () => {
  const closePopupButton = document.getElementById('closePopup');
  const moviePopup = document.getElementById('moviePopup');

  const titleCards = document.getElementsByClassName('cardboard-title');
  const reservationsBtn = document.getElementsByClassName('reservations-button');

  const movieTitleElement = document.getElementById('res-movie-title');
  const movieSummaryElement = document.getElementById('res-movie-summary');
  const movieGenresElement = document.getElementById('res-movie-genres');
  const movieScheduleElement = document.getElementById('res-movie-schedule');
  const movieLanguageElement = document.getElementById('res-movie-language');
  const movieTvElement = document.getElementById('res-movie-tv');
  const img = document.getElementById('res-movie-image');

  const reservationsContainer = document.getElementById('reservations-container');

  const getReservations = async (id) => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NgaD7H5IJk0fYcqyyaMX/reservations?item_id=${id}`);
    const data = await res.json();

    let html = '';

    if (data && data.length) {
      data.forEach((reservations) => {
        html += `<p> ${reservations.date_start} - ${reservations.date_end} by ${reservations.username}</p>`;
      });

      reservationsContainer.innerHTML = html;
    }else { 
      reservationsContainer.innerHTML = html;
    }
  };

  const createReservations = async (id) => {
    const form = document.getElementById('res-form');

    const resNameInput = document.getElementById('res-name');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = resNameInput.value;
      const start = startDateInput.value;
      const end = endDateInput.value;

      try {
        const postData = {
          item_id: id,
          username,
          date_start: start,
          date_end: end,
        };

        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        };
        const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NgaD7H5IJk0fYcqyyaMX/reservations', requestOptions);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        getReservations(id);
      } catch (error) {
        throw new Error('Error found');
      }
    });
  };

  function showMoviePopup(e) {
    const id = e.target.getAttribute('show_id');

    const currentShow = shows.filter((show) => show.id === parseInt(id, 10))[0];

    getReservations(id);

    createReservations(id);

    movieTitleElement.innerHTML = currentShow.name;
    movieSummaryElement.innerHTML = `<strong>Summary:</strong> ${currentShow.summary.slice(0, 80)}...`;
    movieGenresElement.innerHTML = `<strong>Genres:</strong> ${currentShow.genres.join(' ')}`;
    movieScheduleElement.innerHTML = `<strong>Schedule:</strong> ${currentShow.schedule.days[0]} ${currentShow.schedule.time}`;
    movieLanguageElement.innerHTML = `<strong>Langauge:</strong> ${currentShow.language}`;
    movieTvElement.innerHTML = `<strong>TV:</strong> ${currentShow.network.name}`;
    img.src = currentShow.image.original;
    moviePopup.classList.remove('hidden');
  }

  function closeMoviePopup() {
    moviePopup.classList.add('hidden');
  }

  for (let i = 0; i < titleCards.length; i += 1) {
    reservationsBtn[i].addEventListener('click', showMoviePopup);
  }

  closePopupButton.addEventListener('click', closeMoviePopup);
};

export default reservations;