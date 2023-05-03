import { describe, test, expect } from '@jest/globals';
import Validator from '../src/Validator.js';

describe('Check new validator', () => {
  test('should add new validator', () => {
    const v = new Validator();

    const fn1 = (value, start) => value.startsWith(start);
    v.addValidator('string', 'startWith', fn1);

    const schema1 = v.string().test('startWith', 'H');
    expect(schema1.isValid('exlet')).toBe(false);
    expect(schema1.isValid('Hexlet')).toBe(true);

    const fn2 = (value, min) => value >= min;
    v.addValidator('number', 'min', fn2);

    const schema2 = v.number().test('min', 5);
    expect(schema2.isValid(4)).toBe(false);
    expect(schema2.isValid(6)).toBe(true);
  });
});
