import sortByHealth from '../players';

describe('function sortByHealth should sort players by health', () => {
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

  test('Should return a list of layers sorted correctly', () => {
    expect(sortByHealth(entryList)).toEqual(expectedList);
  });
  test('Should return a list of layers sorted correctly', () => {
    expect(sortByHealth(entryList)).not.toBe(expectedList);
  });
});
