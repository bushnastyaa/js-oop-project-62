import StringSchema from './schemas/StringSchema.js';
import CheckValidator from './CheckValidator.js';
import NumberSchema from './schemas/NumberSchema.js';
import ArraySchema from './schemas/ArraySchema.js';
import ObjectSchema from './schemas/ObjectSchema.js';

export default class Validator {
  constructor() {
    this.schemas = {
      string: StringSchema,
      number: NumberSchema,
      array: ArraySchema,
      object: ObjectSchema,
    }
  }

  setSchema(type) {
    return new this.schemas[type](new CheckValidator());
  }

  string() {
    return this.setSchema('string');
  }

  number() {
    return this.setSchema('number');
  }

  array() {
    return this.setSchema('array');
  }

  object() {
    return this.setSchema('object');
  }
}
