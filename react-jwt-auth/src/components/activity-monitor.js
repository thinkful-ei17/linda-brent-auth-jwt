import React from 'react';

export default class ActivityMonitor extends React.Component{
  componentDidMount() {
    window.addEventListener('click', () => console.log('Foo'));
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