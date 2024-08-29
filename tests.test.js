const utils = require('./index')
const {digitalRoot, isEven} = utils;

test('dummy test', () => {
    expect(2).toBe(2);
});

test('it will add all digit until it on digit', () => {
  expect(digitalRoot(38)).toBe(2)
})

test('it will return true if even number', () => {
    expect(isEven(2)).toBe(true)
})