import sortByHealth from '../players';

describe('function sortByHealth should sort players by health', () => {
  test('Should return a list of layers sorted correctly', () => {
    const entryList = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expectedList = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortByHealth(entryList)).toEqual(expectedList);
    // expect(sortByHealth(entryList)).toBe(expectedList); // проверка что не работает
  });
});
