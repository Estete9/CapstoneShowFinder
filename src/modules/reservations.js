import { shows } from "../utils";

const revervations = () => {
  const showPopupButton = document.getElementById('showPopup');
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
  const img = document.getElementById('res-movie-image')
  
  function showMoviePopup(e) {
      const id = e.target.getAttribute("show_id")
      
      const current_show = shows.filter(show => show.id ==  parseInt( id))[0]
      console.log(current_show)

      movieTitleElement.innerHTML = current_show.name;
      movieSummaryElement.innerHTML = `<strong>Summary:</strong> ${current_show.summary.slice(0,80)}...` ;
      movieGenresElement.innerHTML = `<strong>Genres:</strong> ${current_show.genres.join(' ')}`;
      movieScheduleElement.innerHTML = `<strong>Schedule:</strong> ${current_show.schedule.days[0]} ${current_show.schedule.time}` ;
      movieLanguageElement.innerHTML = `<strong>Langauge:</strong> ${current_show.language}`;
      movieTvElement.innerHTML = `<strong>TV:</strong> ${current_show.network.name}`
      img.src = current_show.image.original
      moviePopup.classList.remove('hidden');
  }
  
  
  function closeMoviePopup() {
      moviePopup.classList.add('hidden');
  }
  
  for(let i =0;i < titleCards.length;i ++){
    reservationsBtn[i].addEventListener("click", showMoviePopup)
  }
  
  closePopupButton.addEventListener('click', closeMoviePopup);
}


export default revervations;