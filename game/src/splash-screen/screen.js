import React, { Component } from 'react';
import { Input, Button, Card } from 'antd';
import { Difficulty } from '../difficulty';

export default class Screen extends Component {
  state = {
    name: null,
  };

  handleClick = () => {
    const { name } = this.state;
    const { notify } = this.props;
    sessionStorage.setItem('username', name);
    if (typeof notify === 'function') {
      notify(name);
    }
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <Card
          title="Welcome to React Soduku"
          bordered={false}
          style={{ width: 300 }}
        >
          <Input
            placeholder="Name"
            onChange={e => this.setState({ name: e.target.value })}
            value={name}
          />
          <br />
          <br />
          <Difficulty />
          <br />
          <br />
          <Button type="primary" onClick={() => this.handleClick()}>
            Start The Game
          </Button>
        </Card>
      </div>
    );
  }
}
