import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';


class Members extends React.Component{
    
    render(){
        return(
            <>
            <div id="members">
                <h2>Members</h2>
                <h6 class="see" href='#' >See all</h6>
            </div>

            <div class ="container-gray" id="memberlist">
                <div id="member-round"></div>
                <div id="member-text">
                <p>Organizers</p>
            <p>{this.props.member} &nbsp;&nbsp;&nbsp;&nbsp; 4 others.</p>

                </div>
            </div>
            </>
        )
    }

}
Members.propTypes = {
    member: PropTypes.string
}
export default Members;