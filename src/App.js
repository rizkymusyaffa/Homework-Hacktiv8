
import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  render() {
    return(
      <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav classname="ms-auto">
            <Navbar.Brand href="#home">Qtemu</Navbar.Brand>
            <Nav.Link href="#home">Create Meetup</Nav.Link>
            <Nav.Link href="#features">Explore</Nav.Link>
            <Nav.Link className="navbar-right"href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <div class="container-gray" id="head">
          <div class="left"></div>
          <div class = "right">
            <h2>Hacktiv8 MeetUp</h2>
            <div class = "text-flex">
            <p class ="text-40">Location</p>   <p>Jakarta, Indonesia</p>
            </div>
            <div class = "text-flex">
            <p class ="text-40">Members</p> <p>1,078</p>
            </div>
            <div class = "text-flex">
            <p class ="text-40">Organizer</p> <p>Adhy Wiranata</p>
            </div>
            <div class="button">Join Us</div>
            </div>
        </div>
        <h2>Next Meetup</h2>
        <div class="container-gray" id="container-2" >
          <div id="text-1">
            <p>Awesome meet up and event</p>
            <p>25 January 2019</p>
            <p>Hello, JavaScript & Node.js Ninjas!
              <br></br>Get ready for out monthly meetup JakartaJS! This will be our fifth meetup of 2018!
              <br></br>The meetup format will contain some short stories and technical talks.
              <br></br> If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.
              <br></br>
              <br></br>Remember to bring a photo ID to get through building security.
              <br></br>
              <br></br>-----
              <br></br>
              <br></br>See you there!
              <br></br>
              <br></br>Best,Hengki,Giovanni,Sofian,Riza,Agung The JakartaJS Organizers
            </p>
          </div>
        </div>

        <h2>About Meetup</h2>
        <div class="container-white" id="container-3">
          <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
          <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
        </div>

        <div id="members">
          <h2>Members</h2>
          <h6 class="see" href='#' >See all</h6>
        </div>

        <div class ="container-gray" id="memberlist">
          <div id="member-round"></div>
          <div id="member-text">
            <p>Organizers</p>
            <p>Adhy Wiranata &nbsp;&nbsp;&nbsp;&nbsp; 4 others.</p>

            </div>
        </div>

        <div id="past">
          <h2>Past Meetups</h2>
          <h6 class="see" href='#' >See all</h6>
        </div>

        <div class ="container-white" id="meetups">
        <div class="card">
          <div class="container-card">
          <h4>27 November 2017</h4>
          <p>#37 JakartaJS April Meetup with kumparan</p>
          <p>139 <span class="went">went</span></p>
          <div class="button">View</div>
          </div>
        </div>
        <div class="card">
          <div class="container-card">
          <h4>27 October 2017</h4>
          <p>#38 JakartaJS April Meetup with BliBli</p>
          <p>113 <span class="went">went</span></p>
          <div class="button">View</div>
          </div>
        </div>
        <div class="card">
          <div class="container-card">
          <h4>27 September 2017</h4>
          <p>#37 JakartaJS April Meetup with Hacktiv8</p>
          <p>110 <span class="went">went</span></p>
          <div class="button">View</div>
          </div>
        </div>
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
