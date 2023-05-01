export default class StringSchema {
  options = {
    isRequired: false,
    containStr: [],
    minLength: null,
  };

  contains(str) {
    this.options.containStr.push(str);
    return this;
  }

  required() {
    this.options.isRequired = true;
    return this;
  }

  minLength(minLength) {
    this.options.minLength = minLength;
    return this;
  }

  isValid(value) {
    const checks = [];

    if (this.options.isRequired) {
      checks.push((value) => !!value);
    }

    if (this.options.minLength) {
      checks.push((value) => {
        if (!value && !this.options.required) {
          return true;
        }
        return value?.length >= this.options.minLength;
      });
    }

    if (this.options.containStr.length > 0) {
      checks.push((value) => this.options.containStr.every((string) => value.includes(string)));
    }

    return checks.every((check) => check(value) === true);
  }
}
