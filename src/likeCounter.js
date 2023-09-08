import InvolvementApi from './involvementApi.js';

const likesCounters = async () => {
  const involvementApi = new InvolvementApi();
  const result = await involvementApi.getLikes();
  return result;
};

export default likesCounters;
