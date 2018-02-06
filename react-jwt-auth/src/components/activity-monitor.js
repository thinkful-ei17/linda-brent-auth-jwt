import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';

/* on app load ----> start timer countdown. when user clicks,
reset timer to 5 minutes. when time hits 0 ---->logOut */

export class ActivityMonitor extends React.Component {
  componentDidMount() {
    window.addEventListener('mousemove', this.resetTimer, false);
    window.addEventListener('mousedown', this.resetTimer, false);
    window.addEventListener('keypress', this.resetTimer, false);
    window.addEventListener('DOMMouseScroll', this.resetTimer, false);
    window.addEventListener('mousewheel', this.resetTimer, false);
    window.addEventListener('touchmove', this.resetTimer, false);
    window.addEventListener('MSPointerMove', this.resetTimer, false);
    this.timeoutId = window.setTimeout(this.logOut(), 30000);
  }

  logOut() {
    this.props.dispatch(clearAuth());
  }

  resetTimer() {
    window.clearTimeout(this.timeoutID);
    console.log('timer reset');
  }
  render() {
    return (
      <div>
        Youve been logged out due to inactivity
      </div>
    );
  }
}

export default connect()(ActivityMonitor);
