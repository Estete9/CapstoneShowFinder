/* eslint-disable no-unused-vars */
class InvolvementApi {
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

  getLikes = () => {};

  postLike = () => {};

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
    console.log(`${this.baseUrl + this.endPoints.comments}`);
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
      console.log(`response.ok: ${response.ok}`);
      if (!response.ok) {
        throw new Error('Failed to create a post.');
      }
      console.log('score posted...');
    } catch (error) {
      console.error('Error creating a post:', error.message);
    }
  };

  getReservations = () => {};

  postReservation = () => {};
}

export default InvolvementApi;

