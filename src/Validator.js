import StringSchema from './schemas/StringSchema.js';
import CheckValidator from './CheckValidator.js';

export default class Validator {
  constructor() {
    this.schemas = {
      string: StringSchema,
    }
  }

  setSchema(type) {
    return new this.schemas[type](new CheckValidator());
  }

  string() {
    return this.setSchema('string');
  }
}
