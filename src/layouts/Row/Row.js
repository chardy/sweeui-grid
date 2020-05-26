import getClass from '../Init/classNames';
import React from 'react';
import PropTypes from 'prop-types';
import createProps from '../Init/createProps';

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const propTypes = {
  reverse: PropTypes.bool,
  start: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  center: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  end: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  top: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  middle: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  bottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  around: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  between: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  children: PropTypes.node
};

function getRowClassNames(props) {
  const modificators = [props.className, getClass('row')];

  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      modificators.push(getClass(`${key}-${value}`));
    }
  }

  if (props.reverse) {
    modificators.push(getClass('reverse'));
  }

  return modificators;
}

export function getRowProps(props) {
  return createProps(propTypes, props, getRowClassNames(props));
}

export default function Row(props) {
  return React.createElement('div', getRowProps(props));
}

Row.propTypes = propTypes;
