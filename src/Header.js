import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component{
    
    render(){
        return (
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
        )
    }
}

export default Header;