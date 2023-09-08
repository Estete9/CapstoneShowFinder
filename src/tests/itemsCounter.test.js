import itemsCounter from '../modules/itemsCounter.js';

describe('message', () => {
  it('message', () => {
    const itemsMock = [
      {
        item_id: 1,
        movieName: 'abc',
      },
      {
        item_id: 2,
        movieName: 'lost',
      },
    ];

    expect(itemsCounter(itemsMock)).toBe(2);
  });
});