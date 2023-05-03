import { describe, test, expect } from '@jest/globals';
import Validator from '../src/Validator.js';

describe('Check object validators', () => {
  test('should create object', () => {
    const v = new Validator();
    const schema = v.object();

    expect(schema.isValid({})).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid('string')).toBe(false);
    expect(schema.isValid(7)).toBe(false);
  });

  test('shape validator', () => {
    const v = new Validator();
    const schema = v.object();

    schema.shape({
      name: v.string().required(),
      age: v.number().positive(),
    });

    expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true);
    expect(schema.isValid({ name: 'maya', age: null })).toBe(true);
    expect(schema.isValid({ name: '', age: null })).toBe(false);
    expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false);
  });

  test('should validate without object', () => {
    const v = new Validator();
    const schema = v.object();

    expect(schema.shape().isValid({ name: 'kolya' })).toBe(true);
    expect(schema.shape(null).isValid({ name: 'kolya' })).toBe(true);
    expect(schema.shape(7).isValid({ name: 'kolya' })).toBe(true);
    expect(schema.shape('string').isValid({ name: 'kolya' })).toBe(true);
  });
});
