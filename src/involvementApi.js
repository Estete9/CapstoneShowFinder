/* eslint-disable no-unused-vars */
class involvementApi {
  constructor() {
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

    this.endPoints = {
      makeApp: '/apps/',
      likes: '/apps/:app_id/likes/',
      comments: '/apps/:app_id/comments/',
      reservations: '/apps/:app_id/reservations/',
    };
  }

  makeApp = () => {};

  getLikes = () => {};

  postLike = () => {};

  getComments = async () => {
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.comments}?item_id=item1`);
      if (!response.ok) {
        throw new Error('failed to retrieve comments from API');
      }
      const comments = await response.json();
      return comments;
    } catch (error) {
      return error.message;
    }
  };

  postComment = async (id, name, msg) => {
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.comments}`, {
        item_id: id,
        username: name,
        comment: msg,
      });
      if (!response.ok) {
        throw new Error('failed to post comment to API');
      }
      const postResult = await response.json();
      return postResult;
    } catch (error) {
      return error.message;
    }
  };

  getReservations = () => {};

  postReservation = () => {};
}

export default involvementApi;
