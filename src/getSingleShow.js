const baseUrl = 'https://api.tvmaze.com';

const getSingleShow = async (showID) => {
  const endpoint = `/shows/${showID}`;
  try {
    const response = await fetch(baseUrl + endpoint);
    if (!response.ok) {
      throw new Error('failed to retrieve show information from API');
    }
    const show = await response.json();
    return show;
  } catch (error) {
    return error.message;
  }
};

export default getSingleShow;
