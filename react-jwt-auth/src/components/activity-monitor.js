import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';

/* on app load ----> start timer countdown. when user clicks,
reset timer to 5 minutes. when time hits 0 ---->logOut */

export class ActivityMonitor extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.timeoutId = window.setTimeout(this.logOut.bind(this), 6000);
    window.addEventListener('mousemove', this.resetTimer.bind(this), false);
    window.addEventListener('mousedown', this.resetTimer.bind(this), false);
    window.addEventListener('keypress', this.resetTimer.bind(this), false);
    window.addEventListener('DOMMouseScroll', this.resetTimer.bind(this), false);
    window.addEventListener('mousewheel', this.resetTimer.bind(this), false);
    window.addEventListener('touchmove', this.resetTimer.bind(this), false);
    window.addEventListener('MSPointerMove', this.resetTimer.bind(this), false);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }

  logOut() {
    this.props.dispatch(clearAuth());
  }

  resetTimer() {
    window.clearTimeout(this.timeoutId);
    this.timeoutId = window.setTimeout(this.logOut.bind(this), 6000);
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
