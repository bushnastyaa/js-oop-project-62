import { describe, test, expect } from '@jest/globals';
import Validator from '../src/Validator.js';

describe('Check array validators', () => {
  test('should create number', () => {
    const v = new Validator();
    const schema = v.array();

    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid([])).toBe(true);
    expect(schema.isValid(['array'])).toBe(true);
    expect(schema.isValid('string')).toBe(false);
  });

  test('required', () => {
    const v = new Validator();
    const schema = v.array();

    expect(schema.isValid(null)).toBe(true);
    expect(schema.required().isValid(null)).toBe(false);
    expect(schema.required().isValid([])).toBe(true);
  });

  test('sizeof validator', () => {
    const v = new Validator();
    const schema = v.array();

    expect(schema.sizeof(2).isValid(['array'])).toBe(false);
    expect(schema.sizeof(2).isValid(['array', 'code-basics'])).toBe(true);
    expect(schema.sizeof(3).isValid(['array', 'code-basics'])).toBe(false);
  });
});
