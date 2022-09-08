import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class NextMeetup extends React.Component{

    render(){
        return(
            <>
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
        </>
        )
    }
}

export default NextMeetup;