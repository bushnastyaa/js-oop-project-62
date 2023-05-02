import StringSchema from './schemas/StringSchema.js';
import CheckValidator from './CheckValidator.js';
import NumberSchema from './schemas/NumberSchema.js';

export default class Validator {
  constructor() {
    this.schemas = {
      string: StringSchema,
      number: NumberSchema,
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
}
