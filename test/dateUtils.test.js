/* eslint-disable no-undef */
const {getDate, getLastDate, getDaysOfMonth, getIMMDaysOfMonth, getIMMDaysOfTheYear} = require('../src/dateUtils.js');

test('getDate - given: 20220802 as string by user, return Date', () => {
  expect(getDate("20220802")).toStrictEqual(new Date(2022, 7, 2));
});

test('getLastDate - given: 202208 returns: 20220831', () => {
  expect(getLastDate("202208")).toBe("20220831");
});
test('getLastDate - given: 202209 returns: 20220930', () => {
  expect(getLastDate("202209")).toBe("20220930");
});
test('getLastDate - given: 202202 returns: 20220228', () => {
  expect(getLastDate("202202")).toBe("20220228");
});
test('getLastDate - given: 202002 returns: 20200229', () => {
  expect(getLastDate("202002")).toBe("20200229");
});

test('getLastDate - given: 210002 returns: 21000228', () => {
  expect(getLastDate("210002")).toBe("21000228");
});
test('getDaysOfMonth - given: 202209 returns: ["20220902","20220909","20220916","20220923","20220930"]', () => {
  expect(getDaysOfMonth("202209","Fri")).toStrictEqual(["20220902","20220909","20220916","20220923","20220930"]);
});

test('getDaysOfMonth - given: 202209 returns: ["20220901","20220908","20220915","20220922","20220929"]', () => {
  expect(getDaysOfMonth("202209","Thu")).toStrictEqual(["20220901","20220908","20220915","20220922","20220929"]);
});

test('getDaysOfMonth - given: 202201 returns: ["20220107","20220114","20220121","20220128"]', () => {
  expect(getDaysOfMonth("202201","Fri")).toStrictEqual(["20220107","20220114","20220121","20220128"]);
});

test('getDaysOfMonth - given: 202201 returns: ["20220101","20220108","20220115","20220122","20220129"]', () => {
  expect(getDaysOfMonth("202201","Sat")).toStrictEqual(["20220101","20220108","20220115","20220122","20220129"]);
});

//leap year - Feb
//Non leap year - Feb



test('getIMMDaysOfMonth - given: 202203 returns: 20220316', () => {
  expect(getIMMDaysOfMonth("202203","Wed")).toBe("20220316");
});

test('getIMMDaysOfMonth - given: 202206 returns: 20220615', () => {
  expect(getIMMDaysOfMonth("202206","Wed")).toBe("20220615");
});

test('getIMMDaysOfMonth - given: 202209 returns: 20220921', () => {
  expect(getIMMDaysOfMonth("202209","Wed")).toBe("20220921");
});


test('getIMMDaysOfMonth - given: 202212 returns: 20221221', () => {
  expect(getIMMDaysOfMonth("202212","Wed")).toBe("20221221");
});

//2023
test('getIMMDaysOfMonth - given: 202303 returns: 202303', () => {
  expect(getIMMDaysOfMonth("202303","Wed")).toBe("20230315");
});

test('getIMMDaysOfMonth - given: 202306 returns: 202306', () => {
  expect(getIMMDaysOfMonth("202306","Wed")).toBe("20230621");
});

test('getIMMDaysOfMonth - given: 202309 returns: 202309', () => {
  expect(getIMMDaysOfMonth("202309","Wed")).toBe("20230920");
});


test('getIMMDaysOfMonth - given: 202312 returns: 202312', () => {
  expect(getIMMDaysOfMonth("202312","Wed")).toBe("20231220");
});

test('getIMMDaysOfTheYear - given: 2022 returns: ', () => {
  expect(getIMMDaysOfTheYear("2022")).toStrictEqual(["20220316","20220615","20220921","20221221"]);
});

test('getIMMDaysOfTheYear - given: 2023 returns: ', () => {
  expect(getIMMDaysOfTheYear("2023")).toStrictEqual(["20230315","20230621","20230920","20231220"]);
});