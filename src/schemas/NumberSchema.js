export default class NumberSchema {
  constructor(checks) {
    this.checks = checks;
    this.requiredValue = false;
  }

  positive() {
    this.checks.addCheck((value) => value >= 0);
    return this;
  }

  required() {
    this.requiredValue = true;
    this.checks.addCheck((value) => typeof value === 'number');
    return this;
  }

  range(min, max) {
    this.checks.addCheck((value) => value >= min && value <= max);
    return this;
  }

  isValid(value) {
    return this.checks.getCheck(value);
  }
}
