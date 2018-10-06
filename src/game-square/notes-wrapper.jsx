import React from 'react';
import { Main, Value } from './notes-wrapper.styled';

const NotesWrapper = ({ values }) => (
  <Main>
    {values.map(val => (
      <Value key={`note_${val}`}>{val}</Value>
    ))}
  </Main>
);

export default NotesWrapper;
