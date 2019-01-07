import React from 'react';
import { render } from 'enzyme';
import App from '../app';

describe('Sudoku Battles', () => {
    it('should not throw an error when rendering', () => {
        expect(() => render(<App />)).not.toThrow();
    });
});
