/* eslint-disable no-unused-vars */
class involvementApi {
  constructor() {
    this.appId = 'G291qOZJqU5Pic49OeDp';
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    this.endPoints = {
      makeApp: '/apps',
      likes: `/apps/${this.appId}/likes`,
      comments: `/apps/${this.appId}/comments`,
      reservations: `/apps/${this.appId}/reservations`,
    };
  }

  makeApp = () => {};

  getLikes = async () => {
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.likes}`);
      const responseBody = await response.json();
      if (responseBody.error && responseBody.error.message) {
        return [];
      }

      if (!response.ok) {
        throw new Error('failed to retrieve comments from API');
      }

      const cardboardLikes = document.getElementsByClassName('cardboard-likes');
      for (let i = 0; i < cardboardLikes.length; i += 1) {
        for (let j = 0; j < responseBody.length; j += 1) {
          const elem = cardboardLikes[i].parentElement.parentElement.parentElement.id;
          if (responseBody[j].item_id === elem) {
            cardboardLikes[i].innerHTML = `${responseBody[j].likes} likes`;
          }
        }
      }

      return responseBody;
    } catch (error) {
      return error.message;
    }
  };

  postLike = async (id) => {
    console.log('posting like...');
    console.log(`${this.baseUrl + this.endPoints.likes}`);
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.likes}`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }
      console.log('like posted...');
      this.getLikes();
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };

  getComments = async (showId) => {
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.comments}?item_id=${showId}`);
      const responseBody = await response.json();
      if (responseBody.error && responseBody.error.message) {
        return [];
      }

      if (!response.ok) {
        throw new Error('failed to retrieve comments from API');
      }
      return responseBody;
    } catch (error) {
      return error.message;
    }
  };

  postComment = async (id, name, msg) => {
    console.log('posting score...');
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.comments}`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment: msg,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }
      console.log('comment posted...');
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };

  getReservations = () => {};

  postReservation = () => {};
}

export default involvementApi;
