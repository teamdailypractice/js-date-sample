/* eslint-disable no-undef */
const {getDate, getLastDate} = require('../src/dateUtils.js');

test('given: 20220802 as string by user, return Date', () => {
  expect(getDate("20220802")).toStrictEqual(new Date(2022, 7, 2));
});

test('given: 202208 returns: 20220831', () => {
  expect(getLastDate("202208")).toBe("20220831");
});
test('given: 202209 returns: 20220930', () => {
  expect(getLastDate("202209")).toBe("20220930");
});
test('given: 202202 returns: 20220228', () => {
  expect(getLastDate("202202")).toBe("20220228");
});
test('given: 202002 returns: 20200229', () => {
  expect(getLastDate("202002")).toBe("20200229");
});
test('given: 210002 returns: 21000228', () => {
  expect(getLastDate("210002")).toBe("21000228");
});