import React from 'react';
import PropTypes from 'prop-types';

import { Main, Value } from './notes-wrapper.styled';

const NotesWrapper = ({ values }) => (
  <Main>
    {values.map(val => (
      <Value key={`note_${val}`}>{val}</Value>
    ))}
  </Main>
);

NotesWrapper.propTypes = {
  values: PropTypes.array.isRequired,
};

export default NotesWrapper;
