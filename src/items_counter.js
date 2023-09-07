const itemsCounters = (items) => {
  const shows = document.getElementsByClassName('menu-item selected');
  shows[0].innerHTML = `shows <span>(${items})</span>`;
};

export default itemsCounters;