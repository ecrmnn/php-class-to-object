'use strict';

const fs = require('fs');
const it = require('mocha').it;
const describe = require('mocha').describe;
const expect = require('chai').expect;
const toObject = require('../dist');

describe('PHP Class to Object Test Suite', () => {
  it('should find all properties and methods from Collection.php', () => {
    const php = fs.readFileSync('./test/stubs/Collection.php.txt', 'utf-8');
    const structure = toObject(php);

    expect(structure.properties.private).to.eql([]);
    expect(structure.properties.protected).to.eql(['items']);
    expect(structure.properties.public).to.eql([]);
    expect(structure.methods.private.length).to.eql(0);
    expect(structure.methods.protected.length).to.eql(4);
    expect(structure.methods.public.length).to.eql(109);
  });

  it('should not find functions when not in a class', () => {
    const php = fs.readFileSync('./test/stubs/helpers.php.txt', 'utf-8');
    const structure = toObject(php);

    expect(structure.properties.private).to.eql([]);
    expect(structure.properties.protected).to.eql([]);
    expect(structure.properties.public).to.eql([]);
    expect(structure.methods.private).to.eql([]);
    expect(structure.methods.protected).to.eql([]);
    expect(structure.methods.public).to.eql([]);
  });

  it('should not find functions when not in a class', () => {
    const php = fs.readFileSync('./test/stubs/Str.php.txt', 'utf-8');
    const structure = toObject(php);

    expect(structure.properties.private).to.eql([]);
    expect(structure.properties.protected).to.eql([]);
    expect(structure.properties.public).to.eql([]);
    expect(structure.methods.private).to.eql([]);
    expect(structure.methods.protected).to.eql([
      'charsArray',
      'languageSpecificCharsArray',
    ]);
    expect(structure.methods.public).to.eql([
      'after',
      'ascii',
      'before',
      'camel',
      'contains',
      'endsWith',
      'finish',
      'is',
      'kebab',
      'length',
      'limit',
      'lower',
      'words',
      'parseCallback',
      'plural',
      'random',
      'replaceArray',
      'replaceFirst',
      'replaceLast',
      'start',
      'upper',
      'title',
      'singular',
      'slug',
      'snake',
      'startsWith',
      'studly',
      'substr',
      'ucfirst',
    ]);
  });

  it('should return empty structure when parsing empty string', () => {
    const structure = toObject('');

    expect(structure.properties.private).to.eql([]);
    expect(structure.properties.protected).to.eql([]);
    expect(structure.properties.public).to.eql([]);
    expect(structure.methods.private).to.eql([]);
    expect(structure.methods.protected).to.eql([]);
    expect(structure.methods.public).to.eql([]);
  });

  it('should parse a string that imitates PHP', () => {
    const structure = toObject('xo public function hello() xo');

    expect(structure.properties.private).to.eql([]);
    expect(structure.properties.protected).to.eql([]);
    expect(structure.properties.public).to.eql([]);
    expect(structure.methods.private).to.eql([]);
    expect(structure.methods.protected).to.eql([]);
    expect(structure.methods.public).to.eql(['hello']);
  });
});
