import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const BUTTON_TYPES = [
  'default',
  'success',
  'cancel',
  'navigation',
  'githubLogin'
];


const Button = (props) => {
  let Tag = 'button';
  let {
    onClick,
    mod,
    className,
    active,
    ...rest
  } = props;

  mod = mod || 'default';
  rest.type = rest.type || 'button';

  const disabledStyle = props.disabled ? style.disabled : '';
  const externalStyle = className ? className : '';
  const activeStyle = active ? style.active : '';

  const classes = `${style.button} ${style[mod]} ${disabledStyle} ${activeStyle} ${externalStyle}`;

  if (props.href) {
    Tag = 'a';
    delete rest.type;
    if (props.disabled) {
      onClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
      };
    }
  }

  return <Tag className={classes} onClick={onClick} {...rest}>{props.children}</Tag>;
};

Button.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  mod: PropTypes.oneOf(BUTTON_TYPES)
};

export default Button;
