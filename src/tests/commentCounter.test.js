import commentsCounter from '../modules/commentsCounter.js';

describe('message', () => {
  it('message', () => {
    const commentsMock = [
      {
        item_id: 1,
        username: 'Alex',
        comment: 'cool show',
      },
      {
        item_id: 2,
        username: 'Alvee',
        comment: "I've seen these before",
      },
    ];

    expect(commentsCounter(commentsMock)).toBe(2);
  });
});
