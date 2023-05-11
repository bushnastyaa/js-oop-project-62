### Hexlet tests and linter status:
[![Actions Status](https://github.com/bushnastyaa/js-oop-project-62/workflows/hexlet-check/badge.svg)](https://github.com/bushnastyaa/js-oop-project-62/actions)

## Description
**Data validation** - is a simple library for checking the accuracy and quality of any data before using or otherwise processing data. It is implemented by building multiple checks into a system. This library provides several data validation methods and the ability to write custom validators.

### Usage example

```js
const validator = new Validator();

const schema = validator.string();

schema.isValid('string'); // true
```
### String schema

- `required`
- `contains`
- `minLength`

```js
const schema = validator.required().string();

schema.isValid('some text'); // true
schema.isValid(''); // false

schema.contains('some').isValid('some required text'); // true
schema.contains('any').isValid('some required text'); // false
```

### Number schema

- `required`
- `range`
- `positive`

```js
const schema = validator.number();

schema.isValid(null); // true

schema.required();

schema.isValid(null); // false
schema.isValid(7); // true

schema.positive().isValid(10); // true

schema.range(-5, 5);

schema.isValid(-3); // false
schema.isValid(5); // true
```

### Array schema

- `required`
- `sizeof`

```js
const schema = validator.array();

schema.isValid([]); // true
schema.isValid(['text']); // true

schema.sizeof(2);

schema.isValid(['text']); // false
schema.isValid(['text', 'code']); // true
```

### Object schema

- `shape`

```js
const schema = validator.object();

schema.shape({
  name: validator.string().required(),
  age: validator.number().positive(),
});

schema.isValid({ name: 'ivan', age: 30 }); // true
schema.isValid({ name: 'maya', age: null }); // true
schema.isValid({ name: '', age: null }); // false
schema.isValid({ name: 'ada', age: -5 }); // false
```

### Custom validator

Add new validators for any schema

```js
const validator = new Validator();

const fn = (value, start) => value.startsWith(start);
validator.addValidator('string', 'startWith', fn);

const schema = validator.string().test('startWith', 'I');

schema.isValid('nsomnia'); // false
schema.isValid('Insomnia'); // true
```