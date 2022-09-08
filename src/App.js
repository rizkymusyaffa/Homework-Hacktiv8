
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import NavigationBar from './NavigationBar';
import Header from './Header';
import NextMeetup from './NextMeetup';
import AboutMeetup from './About Meetup';
import Members from './Members';
import PastMeetup from './PastMeetup';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      members: [],
      pastMeetups: [['27 November 2017','#39 JakartaJs April Meetup with kumparan',139],['27 October 2017','#38 JakartaJs April Meetup with BliBli',113],['27 September 2017','#37 JakartaJs April Meetup with Hacktiv8',110]],
      member:'Adhy Wiranata',
    };
  }
  render() {
    return(
      <>
        <NavigationBar></NavigationBar>
      <div class ="main-Container">
        <Header></Header>
        <NextMeetup></NextMeetup>
        <AboutMeetup></AboutMeetup>
        <Members member={this.state.member}></Members>
        <PastMeetup past={this.state.pastMeetups}></PastMeetup>

        
      </div>
      <footer>
        <hr class="solid"></hr>
        <div class="footer-text">Copyright Hacktiv8 2018</div>
        </footer>
      </>
    );
  }
}

export default App;
