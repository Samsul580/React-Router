import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetailBody from '../TeamDetailBody/TeamDetailBody';
import TeamHeader from '../TeamHeader/TeamHeader';

const TeamDetail = () => {
    const {teamId} = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${teamId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamDetail(data.leagues[0]))
        .catch(error => console.log(error))
    }, [teamId])
    return (
        <div>
            <TeamHeader teamDetail={teamDetail}></TeamHeader>
            <TeamDetailBody teamDetail={teamDetail}></TeamDetailBody>
            
        </div>
    );
};

export default TeamDetail;