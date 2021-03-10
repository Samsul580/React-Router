import React from 'react';
import './TeamHeader.css';

const TeamHeader = (props) => {
    const {strBadge} = props.teamDetail;
    return (
        <div className="team-header">
            <div className="blur">
                <img src={strBadge} alt="" />
            </div>
        </div>
    );
};

export default TeamHeader;