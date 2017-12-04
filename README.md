# php-class-to-object
> Parse a PHP class into a JavaScript object

[![travis](https://img.shields.io/travis/ecrmnn/php-class-to-object/master.svg?style=flat-square)](https://travis-ci.org/ecrmnn/php-class-to-object/builds)
[![npm version](https://img.shields.io/npm/v/php-class-to-object.svg?style=flat-square)](http://badge.fury.io/js/php-class-to-object)
[![npm downloads](https://img.shields.io/npm/dm/php-class-to-object.svg?style=flat-square)](http://badge.fury.io/js/php-class-to-object)
[![npm license](https://img.shields.io/npm/l/php-class-to-object.svg?style=flat-square)](http://badge.fury.io/js/php-class-to-object)
[![prs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![eslint](https://img.shields.io/badge/code_style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)

### Installation
```bash
npm install php-class-to-object --save
```

### Usage
```javascript
const parse = require('php-class-to-object');

const phpClass = fs.readFileSync('./User.php', 'utf-8');

parse(phpClass);
//=> {
//=>   properties: {
//=>     private: [],
//=>     protected: [],
//=>     public: [],
//=>   },
//=>   methods: {
//=>     private: [],
//=>     protected: [],
//=>     public: [
//=>       '__construct',
//=>       'create',
//=>       'save',
//=      ],
//=>   },
//=> }
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)
