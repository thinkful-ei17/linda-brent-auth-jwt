import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';

/* on app load ----> start timer countdown. when user clicks,
reset timer to 5 minutes. when time hits 0 ---->logOut */

export class ActivityMonitor extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.timeoutId = window.setTimeout(this.logOut.bind(this), 10000);
    this.timeoutIdAlert = window.setTimeout(this.alertTime.bind(this), 5000);
    window.addEventListener('mousemove', this.resetTimer.bind(this), false);
    window.addEventListener('mousedown', this.resetTimer.bind(this), false);
    window.addEventListener('keypress', this.resetTimer.bind(this), false);
    window.addEventListener('DOMMouseScroll', this.resetTimer.bind(this), false);
    window.addEventListener('mousewheel', this.resetTimer.bind(this), false);
    window.addEventListener('touchmove', this.resetTimer.bind(this), false);
    window.addEventListener('MSPointerMove', this.resetTimer.bind(this), false);
    window.addEventListener('mousedown', this.resetAlert.bind(this), false);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
    window.clearTimeout(this.timeoutIdAlert);
  }

  logOut() {
    this.props.dispatch(clearAuth());
  }

  alertTime() {
    console.log('alertTime was triggered');
   }

  resetAlert() {
    window.clearTimeout(this.timeoutIdAlert);
    this.timeoutIdAlert = window.setTimeout(this.alertTime.bind(this), 5000);
  }

  resetTimer() {
    window.clearTimeout(this.timeoutId);
    this.timeoutId = window.setTimeout(this.logOut.bind(this), 6000);
    
  }

  render() {
    return (
      <div>
       Hello what
      </div>
    );
  }
}

const mapStateToProps = state => ({
  idleTime: state.idleTime,
});

export default connect(mapStateToProps)(ActivityMonitor);

