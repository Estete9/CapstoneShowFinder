/* eslint-disable no-unused-vars */
class InvolvementApi {
  constructor() {
    this.appId = 'G291qOZJqU5Pic49OeDp';
    this.baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    this.endPoints = {
      makeApp: '/apps/',
      likes: `/apps/${this.appId}/likes/`,
      comments: `/apps/${this.appId}/comments/`,
      reservations: `/apps/${this.appId}/reservations/`,
    };
  }

  makeApp = () => {};

  getLikes = () => {};

  postLike = () => {};

  getComments = async (showId) => {
    try {
      const response = await fetch(`${this.baseUrl + this.endPoints.comments}?item_id=${showId}`);
      if (response.status === 400) {
        return [];
      }
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
        item_id: id.toString(),
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

export default InvolvementApi;
