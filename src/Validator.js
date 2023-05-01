import StringSchema from './schemas/StringSchema.js';

export default class Validator {
  constructor() {
    this.schemas = {
      string: StringSchema,
    }
  }

  setSchema(type) {
    return new this.schemas[type](this);
  }

  string() {
    return this.setSchema('string');
  }
}
