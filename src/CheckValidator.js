export default class CheckValidator {
  constructor() {
    this.checks = [];
  }

  addCheck(check) {
    this.checks.push(check);
  }

  getCheck(value) {
    return this.checks.every((check) => check(value) === true);
  }
}
