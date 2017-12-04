'use strict';

module.exports = function (phpClass) {
  var structure = {
    properties: {
      private: [],
      protected: [],
      public: []
    },
    methods: {
      private: [],
      protected: [],
      public: []
    }
  };

  var propertyRegex = /(public|protected|private) \$(.*) (?==)/g;
  var propertyMatches = propertyRegex.exec(phpClass);

  while (propertyMatches != null) {
    structure.properties[propertyMatches[1]].push(propertyMatches[2]);
    propertyMatches = propertyRegex.exec(phpClass);
  }

  var methodRegex = /(public|protected|private) (.*function) (.*)(?=\()/g;
  var methodMatches = methodRegex.exec(phpClass);

  while (methodMatches != null) {
    structure.methods[methodMatches[1]].push(methodMatches[3]);
    methodMatches = methodRegex.exec(phpClass);
  }

  return structure;
};