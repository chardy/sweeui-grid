import React from 'react';
import PropTypes from 'prop-types';
import createProps from '../Init/createProps';
import getClass from '../Init/classNames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default function Grid(props) {
  const containerClass = getClass('container');
  const classNames = [props.className, containerClass];

  return React.createElement(props.tagName || 'div', createProps(propTypes, props, classNames));
}

Grid.propTypes = propTypes;
