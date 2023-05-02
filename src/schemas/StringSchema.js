export default class StringSchema {
  constructor(checks) {
    this.checks = checks;
    this.requiredValue = false;
  }

  contains(str) {
    this.checks.addCheck((value) => value.includes(str));
    return this;
  }

  required() {
    this.requiredValue = true;
    this.checks.addCheck((value) => !!value?.trim());
    return this;
  }

  minLength(minLength) {
    this.checks.addCheck((value) => typeof value === 'string' && value.length >= minLength);
    return this;
  }

  isValid(value) {
    return this.checks.getCheck(value);
  }
}
