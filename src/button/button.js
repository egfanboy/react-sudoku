import React from 'react';
import PropTypes from 'prop-types';

import { MdClear } from 'react-icons/md';
import StyledButton from './button.styled';

const Button = ({ onClick, value, enabled, children, className }) => (
  <StyledButton
    className={className}
    onClick={e => onClick(value, e)}
    enabled={enabled}
  >
    {children || value || <MdClear size="0.75em" />}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  enabled: PropTypes.bool,
  value: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
};
Button.defaultProps = {
  enabled: true,
};

export default Button;
