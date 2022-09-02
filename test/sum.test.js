/* eslint-disable no-undef */

const sum = require('../src/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
  expect(sum(-1, 2)).toBe(1);
});

test('adds -9 + 0 to equal -9', () => {
  expect(sum(-9, 0)).toBe(-9);
});

test('adds -9 + -8 to equal -17', () => {
  expect(sum(-9, -8)).toBe(-17);
});