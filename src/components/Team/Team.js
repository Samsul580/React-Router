import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const { strLeague, strSport, idLeague } = props.team;
    const [teamImg, setTeamImg] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(response => response.json())
            .then(data => setTeamImg(data.leagues[0]))
    }, [idLeague])
    return (
        <div>
            <div className="p-3 team-box">
                <img className="w-50 h-50" src={teamImg.strBadge} alt="strbadge" />
                <h5 className="m-2">{strLeague}</h5>
                <p>Sports type: {strSport}</p>
                <button className="btn btn-warning text-light team-btn"><Link to={`/team/${idLeague}`}>Explore <FontAwesomeIcon icon={faArrowRight} /></Link></button>
            </div>
        </div>
    );
};

export default Team;