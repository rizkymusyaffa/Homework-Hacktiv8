import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class AboutMeetup extends React.Component{
    render(){
        return(
        <>
            <h2>About Meetup</h2>
            <div class="container-white" id="container-3">
                <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
                <p>Twitter: @JakartaJS and we use the hashtag #jakartajs</p>
            </div>
        </>
        )
    }
}

export default AboutMeetup;