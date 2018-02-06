import React from 'react';
import { clearAuth } from '../actions/auth';

/*on app load ----> start timer countdown. when user clicks, reset timer to 5 minutes. when time hits 0 ---->logOut*/

export default class ActivityMonitor extends React.Component{ 
  logOut() {
    this.props.dispatch(clearAuth());
  }

  startTimer() {
      let timeoutID;
      timeoutID = window.setTimeout(this.logOut(), 300000); 
  }

  resetTimer(e) {
      window.clearTimeout(timeoutID);
  console.log('timer reset')
  }
  
  componentDidMount() {

    window.addEventListener("mousemove", this.resetTimer, false);
    window.addEventListener("mousedown", this.resetTimer, false);
    window.addEventListener("keypress", this.resetTimer, false);
    window.addEventListener("DOMMouseScroll", this.resetTimer, false);
    window.addEventListener("mousewheel", this.resetTimer, false);
    window.addEventListener("touchmove", this.resetTimer, false);
    window.addEventListener("MSPointerMove", this.resetTimer, false);
     
    this.startTimer();
  }

  componentWillUnmount() {
     // return this.props.dispatch(clearAuth());
    }

  // render() {
  //   return( 
  //     <div> Logged Out Due to Inactivity </div>
  //   );
  // }
}

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null,
// });

// export default connect(mapStateToProps)(ActivityMonitor);



// // Using jQuery (but could use pure JS with cross-browser event handlers):
// var idleSeconds = 30;

// $(function(){
//   var idleTimer;
//   function resetTimer(){
//     clearTimeout(idleTimer);
//     idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
//   }
//   $(document.body).bind('mousemove keydown click',resetTimer); //space separated events list that we want to monitor
//   resetTimer(); // Start the timer when the page loads
// });

// function whenUserIdle(){
//   //...
// }

// var timeoutID;
 
// function setup() {
//     this.addEventListener("mousemove", resetTimer, false);
//     this.addEventListener("mousedown", resetTimer, false);
//     this.addEventListener("keypress", resetTimer, false);
//     this.addEventListener("DOMMouseScroll", resetTimer, false);
//     this.addEventListener("mousewheel", resetTimer, false);
//     this.addEventListener("touchmove", resetTimer, false);
//     this.addEventListener("MSPointerMove", resetTimer, false);
 
//     startTimer();
// }
// setup();
 
// function startTimer() {
//     timeoutID = window.setTimeout(goInactive, 30000);
// }
 
// function resetTimer(e) {
//     window.clearTimeout(timeoutID);
//  console.log('timer reset')
// }