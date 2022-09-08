import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PastMeetup extends React.Component{
    render(){
        return(
        <>
        <div id="past">
            <h2>Past Meetups</h2>
            <h6 class="see" href='#' >See all</h6>
        </div>

        <div class ="container-white" id="meetups">
        {this.props.past.map((items) => {
            return (
                <div class="card">
                <div class="container-card">
                <h4>{items[0]}</h4>
                <p>{items[1]}</p>
                <p>{items[2]} <span class="went">went</span></p>
                <div class="button">View</div>
                </div>
                </div>
            );
                
                
        })}
        </div>
        </>
        )
    }
}


export default PastMeetup;