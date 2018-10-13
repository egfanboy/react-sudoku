import React from 'react';
import PropTypes from 'prop-types';

import { MdClear } from 'react-icons/md';
import StyledButton from './button.styled';

const Button = ({ onClick, value, enabled, children, className }) => (
  <StyledButton
    className={className}
    onClick={() => onClick(value)}
    enabled={enabled}
  >
    {children || value || <MdClear size="0.75em" />}
  </StyledButton>
);

Button.propTypes = {
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
