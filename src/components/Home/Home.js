import React, { useEffect, useState } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(response => response.json())
            .then(data => setTeams(data.leagues))
            .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className="teams-area">
                <div className="teams container">
                {
                    teams.map(team => <Team team={team} key={team.idLeague}></Team>)
                }
                </div>
            </div>

        </div>
    );
};

export default Home;