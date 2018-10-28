const assert = require('assert');
const sumOfOther = require('./src/sum-of-other');
const make = require('./src/make');

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
    assert.deepEqual(arr4, [18, 21 , 22, 16, 15]);
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
    function divide(a,b) {
      return a-b;
    }

    const test2 = make(15)(41)(divide);
    assert.deepEqual(test2, -26);
  });
});