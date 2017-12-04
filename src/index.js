'use strict';

module.exports = (phpClass) => {
  const structure = {
    properties: {
      private: [],
      protected: [],
      public: [],
    },
    methods: {
      private: [],
      protected: [],
      public: [],
    },
  };

  const propertyRegex = /(public|protected|private) \$(.*) (?==)/g;
  let propertyMatches = propertyRegex.exec(phpClass);

  while (propertyMatches != null) {
    structure.properties[propertyMatches[1]].push(propertyMatches[2]);
    propertyMatches = propertyRegex.exec(phpClass);
  }

  const methodRegex = /(public|protected|private) (.*function) (.*)(?=\()/g;
  let methodMatches = methodRegex.exec(phpClass);

  while (methodMatches != null) {
    structure.methods[methodMatches[1]].push(methodMatches[3]);
    methodMatches = methodRegex.exec(phpClass);
  }

  return structure;
};
