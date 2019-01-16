import React from 'react';
import PropTypes from 'prop-types';

import StyledIcon from './icon.styled';

const Icon = ({ className, size = '12', name, theme }) => (
  <StyledIcon
    className={`material-icons ${className}`}
    size={size}
    theme={theme}
  >
    {name}
  </StyledIcon>
);

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.object,
  className: PropTypes.string,
};

export default Icon;
