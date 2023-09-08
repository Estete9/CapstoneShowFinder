import { shows } from '../utils.js';

const reservationsCounter = (reservations) => { 
  return reservations.length
}

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

  const updateReservationsCounter = (reservations) => { 
    const counter = document.getElementById("reservations-counter") 

    counter.textContent = `Revervations (${reservationsCounter(reservations)})`
  }

  const getReservations = async (id) => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NgaD7H5IJk0fYcqyyaMX/reservations?item_id=${id}`);
    const data = await res.json();

    let html = '';

    if (data && data.length) {
      data.forEach((reservations) => {
        html += `<p> ${reservations.date_start} - ${reservations.date_end} by ${reservations.username}</p>`;
      });

      updateReservationsCounter(data)

      reservationsContainer.innerHTML = html;
    }
  };

  function showMoviePopup(e) {
    const id = e.target.getAttribute('show_id');

    const currentShow = shows.filter((show) => show.id === parseInt(id, 10))[0];

    getReservations(id);

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