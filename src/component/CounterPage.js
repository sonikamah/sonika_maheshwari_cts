// Create 3 Buttons and fill out the blanks to make the counter work. The 3 Buttons should be able to handle:
// Increment counter
// Decrement counter
// Reset counter
import React from "react";
import { connect } from 'react-redux';
import { incrementCounter , decrementCounter, resetCounter } from '../actions';
import Counter from './Counter';
import Button from './Button';

  // The container
class CounterPage extends React.Component {
    render() {
      const { onIncrementClick, onDecrementClick, onResetClick, state } = this.props;
      var counter = state;
      return(
        <div>
          <Counter value={counter} />
          <Button functionHandler={onIncrementClick} value="+" />
          <Button functionHandler={onDecrementClick} value="-" />
          <Button functionHandler={onResetClick} value="Reset" />
        </div>
      );
    }
  }
  
  // Dispatch to Props
  const mapDispatchToProps = dispatch => ({
      onIncrementClick : () => dispatch(incrementCounter()),
      onDecrementClick : () => dispatch(decrementCounter()),
      onResetClick : () => dispatch(resetCounter())
  });
  
  // State to Props
  const mapStateToProps = state => ({ state });
  
  // Connect State & Dispatch as props to CounterPage
  export default connect(
      mapStateToProps, 
      mapDispatchToProps
  )(CounterPage);