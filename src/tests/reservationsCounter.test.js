import {reservationsCounter} from "../modules/reservationsCounter";

describe('Reservations Test', () => {
  test('Reservations counter should give total count', () => {

    const dummyReservations = [
      { end_date: '3/2/2023', start_date: '34/4/2003', item_id: 3 }, 
      { end_date: '3/2/2023', start_date: '34/4/2003', item_id: 2 }, 
      { end_date: '3/2/2023', start_date: '34/4/2003', item_id: 1 }
    ];
    
    expect(reservationsCounter(dummyReservations)).toStrictEqual(3);
  });
});