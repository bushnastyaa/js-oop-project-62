export default class StringSchema {
  constructor() {
    this.isRequired = false;
    this.containStr = [];
  }

  contains(str) {
    this.containStr.push(str);
  }

  required() {
    this.isRequired = true;
  }

  isValid(value) {
    const checks = [];

    if (this.isRequired) {
      checks.push(!!value);
    }

    if (this.containStr.length > 0) {
      checks.push(this.containStr.every((str) => value.includes(str)));
    }

    return checks.every((check) => check === true);
  }
}
