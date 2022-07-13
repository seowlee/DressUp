import React from "react";
import { Button,
		 ButtonGroup } 
		 from '@mui/material';

class GroupedButtons extends React.Component {
  state = { counter: 1 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
	if (this.state.counter > 1) {
		this.setState(state => ({ counter: state.counter - 1 }));
	}
  };
  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleDecrement}>-</Button>
        {displayCounter && <Button disabled>{this.state.counter}</Button>}
        {displayCounter && <Button onClick={this.handleIncrement}>+</Button>}
      </ButtonGroup>
    );
  }
}

export default GroupedButtons;
