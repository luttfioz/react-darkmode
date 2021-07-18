import React from 'react';
import { connect } from 'react-redux';
import { darkModeAction } from './actions/darkModeAction';
import { countAction } from './actions/countAction';
import DarkModeDemo from './DarkModeDemo';
import './App.scss';

function App(props) {
  function handleChange(val) {
    props.onChecked(val);
  }
  function handleCount(val) {
    props.onCount(props.count + 5);
  }
  return (
    <div className={'App ' + (props.darkmode ? 'App-Dark' : 'App-Light')}>
      <DarkModeDemo checked={props.darkmode} onChecked={handleChange} />
      <button data-testid="count" onClick={handleCount}>Toogle Count {props.count}</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = dispatch => ({
  onChecked: val => dispatch(darkModeAction(val)),
  onCount: val => dispatch(countAction(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
