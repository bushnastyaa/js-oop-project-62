import { describe, test, expect } from '@jest/globals';
import Validator from '../src/Validator.js';

describe('Check numbers validators', () => {
  test('should create number', () => {
    const v = new Validator();
    const schema = v.number();

    expect(schema.isValid(7)).toBe(true);
    expect(schema.isValid(null)).toBe(true);
  });

  test('required', () => {
    const v = new Validator();
    const schema = v.number();

    expect(schema.isValid(null)).toBe(true);
    schema.required();
    expect(schema.isValid(null)).toBe(false);
    expect(schema.required().isValid(0)).toBe(true);
  });

  test('range validator', () => {
    const v = new Validator();
    const schema = v.number();

    expect(schema.range(-5, 5).isValid(5)).toBe(true);
    expect(schema.range(3, 5).isValid(5)).toBe(true);
    expect(schema.range(0, 5).isValid(-5)).toBe(false);
  });

  test('positive validator', () => {
    const v = new Validator();
    const schema = v.number();

    expect(schema.positive().isValid(-3)).toBe(false);
    expect(schema.positive().isValid(5)).toBe(true);
  });
});
