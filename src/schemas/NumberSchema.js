import isNumber from '../options/numberValidator.js';

export default class NumberSchema {
  constructor(checks) {
    this.checks = checks;
  }

  positive() {
    this.checks.addCheck((value) => value >= 0);
    return this;
  }

  required() {
    this.checks.addCheck((value) => typeof value === 'number');
    return this;
  }

  range(min, max) {
    this.checks.addCheck((value) => value >= min && value <= max);
    return this;
  }

  isValid(value) {
    if (isNumber(value)) {
      return this.checks.getCheck(value);
    }
    return false;
  }
}
