const getDate = require('../src/dateUtils.js');

test('given: 20220802 as string, return Date', () => {
  expect(getDate("20220802")).toStrictEqual(new Date(2022, 8, 2));
});
