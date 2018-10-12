import React from 'react';
import Downshift from 'downshift';

import { Main, Item } from './list.styled';

export default class List extends React.Component {
  static defaultProps = {
    items: [],
    selectedIndexes: [],
    onChange: () => null,
  };

  state = { hovering: false, factoredNewItems: false };

  handleChange = selection => {
    const { onChange } = this.props;

    onChange(selection);
  };

  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.clickItem: {
        const { selectedIndexes, items } = this.props;

        const isAlreadyInState = selectedIndexes.some(
          index => index === changes.selectedItem.index
        );

        const allIndexes = [
          ...new Set([...selectedIndexes, changes.selectedItem.index]),
        ];

        let selectedItems = allIndexes.map(value =>
          items.find(({ index }) => index === value)
        );

        if (isAlreadyInState)
          selectedItems = selectedItems.filter(
            ({ index }) => index !== changes.selectedItem.index
          );

        return {
          ...changes,
          highlightedIndex: null,
          selectedItem: selectedItems,
        };
      }

      default:
        return changes;
    }
  };

  render() {
    const { items, selectedIndexes, className } = this.props;
    const { hovering } = this.state;

    return (
      <Downshift
        stateReducer={this.stateReducer}
        onChange={this.handleChange}
        itemToString={item => (item ? item : '')}
      >
        {({ getRootProps, getItemProps, highlightedIndex }) => (
          <Main
            className={className}
            {...getRootProps({ refKey: 'innerRef' })}
            onMouseEnter={() => this.setState({ hovering: true })}
            onMouseLeave={() => this.setState({ hovering: false })}
          >
            {items.map(({ boardIndex, value, index }) => {
              const message = value
                ? `Changed tile ${boardIndex} to ${value}`
                : `Removed value from tile ${boardIndex}`;

              return (
                <Item
                  highlighted={highlightedIndex === index && hovering}
                  selected={selectedIndexes.includes(index)}
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
