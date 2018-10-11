import React from 'react';
import Downshift from 'downshift';

import { Main, Item } from './list.styled';

const stateReducer = (state, changes) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.clickItem: {
      const selectedItems = state.selectedItem || [];

      const isAlreadyInState = selectedItems.some(
        ({ index }) => index === changes.selectedItem.index
      );

      return {
        ...changes,
        highlightedIndex: null,
        selectedItem: [
          ...(isAlreadyInState
            ? selectedItems.filter(
                ({ index }) => index !== changes.selectedItem.index
              )
            : [...selectedItems, changes.selectedItem]),
        ],
      };
    }

    default:
      return changes;
  }
};

export default class List extends React.Component {
  static defaultProps = { items: [] };

  state = { hovering: false };

  handleChange = selection => {
    const { onChange } = this.props;

    onChange(selection);
  };

  render() {
    const { items } = this.props;
    return (
      <Downshift
        stateReducer={stateReducer}
        onChange={this.handleChange}
        itemToString={item => (item ? item : '')}
      >
        {({ getRootProps, getItemProps, highlightedIndex, selectedItem }) => (
          <Main
            {...getRootProps({ refKey: 'innerRef' })}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
          >
            {items.map(({ boardIndex, value }, index) => {
              const message = value
                ? `Changed tile ${boardIndex} to ${value}`
                : `Removed value from tile ${boardIndex}`;

              return (
                <Item
                  highlighted={
                    highlightedIndex === index && this.state.hovering
                  }
                  selected={(selectedItem || [])
                    .map(({ index }) => index)
                    .includes(index)}
                  key={`${boardIndex}-${value}}-${index}`}
                  {...getItemProps({ item: { boardIndex, value, index } })}
                >
                  {message}
                </Item>
              );
            })}
          </Main>
        )}
      </Downshift>
    );
  }
}
