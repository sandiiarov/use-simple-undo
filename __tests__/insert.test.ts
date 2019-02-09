import insert from '../src/insert';

test('insert new value', () => {
  const arr = [1, 2, 3];
  const cursor = 0;
  const value = 999;

  const newArr = insert(arr, cursor, value);

  expect(newArr).toContain(value);
  expect(newArr).toHaveLength(arr.length);
});

test('insert new value in the proper place', () => {
  const arr = ['1', '2', '3'];
  const cursor = 1;
  const value = '999';

  const newArr = insert(arr, cursor, value);

  expect(newArr).toContain(value);
  expect(newArr[cursor]).toBe(value);
});
