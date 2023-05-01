import { describe, test, expect } from '@jest/globals';
import Validator from '../src/Validator.js';

describe('Check string validators', () => {
  test('should create new validator', () => {
    const validator = new Validator();

    expect(validator).toBeTruthy();
  });

  test('isValid', () => {
    const v = new Validator();
    const schema = v.string();

    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);

    schema.required();

    expect(schema.isValid('what does the fox say')).toBe(true);
    expect(schema.isValid('hexlet')).toBe(true);
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid('')).toBe(false);

    schema.contains('what');
    expect(schema.isValid('what does the fox say')).toBe(true);

    schema.contains('whatthe');
    expect(schema.isValid('what does the fox say')).toBe(false);
  });
});
