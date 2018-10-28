const assert = require('assert');
const sumOfOther = require('./src/sum-of-other');
const make = require('./src/make');
const recursion = require('./src/recursion');

describe('sumofother', () => {
  it('arr1', () => {
    const arr1 = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(arr1, [8, 7, 6, 9]);
  });

  it('arr2', () => {
    const arr2 = sumOfOther();
    assert.deepEqual(arr2, undefined);
  });

  it('arr3', () => {
    const arr3 = sumOfOther([]);
    assert.deepEqual(arr3, []);
  });

  it('arr4', () => {
    const arr4 = sumOfOther([5, 2, 1, 7, 8]);
    assert.deepEqual(arr4, [18, 21, 22, 16, 15]);
  });
});

describe('make', () => {
  it('test1', () => {
    function sum(a, b) {
      return a + b;
    }
    const test1 = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(test1, 777);
  });

  it('test2', () => {
    function divide(a, b) {
      return a - b;
    }

    const test2 = make(15)(41)(divide);
    assert.deepEqual(test2, -26);
  });
});

describe('recursion', () => {
  it('test1', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const array1 = recursion(tree);
    assert.deepEqual(array1, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('test2', () => {
    const tree = { value: 100, left: { value: 90, right: { value: 120, right: { value: 130 } } } };
    const array2 = recursion(tree);
    assert.deepEqual(array2, [[100], [90, 120, 130]]);
  });
});
