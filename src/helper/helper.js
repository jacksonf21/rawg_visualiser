const classNames = require('classnames');

const overlayClassName = (state) => {
  return classNames('menu-overlay', {
    'menu-overlay--visible' : state === 1
  });
}

const menuClassName = (state) => {
  return classNames('menu', {
    'menu--visible' : state === 1
  });
}

module.exports = { overlayClassName, menuClassName }