const classNames = require('classnames');

const templateClassName = (state, typical, iftrue) => {
  return classNames(typical, {
    [iftrue] : state === 1
  })
};

module.exports = { templateClassName }