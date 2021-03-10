import React from 'react';
import './TeamDetailBody.css';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessPawn, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';

const TeamDetailBody = (props) => {
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strTwitter, strYoutube } = props.teamDetail;

    return (
        <div className="team-detail-body py-4">
            <div className="container team-detail-card p-3 text-light">
                <div className="row">
                    <div className="col-md-7 mt-4">
                        <h2>{strLeague}</h2>
                        <h4><FontAwesomeIcon icon={faChessPawn} /> Founded: {intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h4>
                        <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>
                    </div>
                    <div className="col-md-5">
                        {
                            strGender === "Male" ? <img className="w-100" src={Male} alt="male" />
                            : <img className="w-100" src={Female} alt="female" />
                        }
                        
                    </div>
                </div>
            </div>
            <div className="container team-detail-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ad fuga dolorem culpa reiciendis, quo nemo excepturi ab dolor a quaerat commodi suscipit sequi? Quos harum laboriosam, mollitia qui ipsum tenetur maiores asperiores quia, ullam consequuntur perspiciatis ab voluptate eum modi veritatis alias iusto, natus officia quo exercitationem consectetur nulla debitis dolore! Molestias fuga dolorem quaerat ad eaque tempore nihil quis, placeat consequatur id. Accusantium voluptatum natus nihil asperiores hic aspernatur sequi. Nihil molestias, consequatur cum distinctio consequuntur sapiente soluta, cumque totam omnis incidunt aliquam quae, vero possimus itaque quia? Temporibus porro recusandae impedit deserunt ratione tempore optio necessitatibus sint?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ad fuga dolorem culpa reiciendis, quo nemo excepturi ab dolor a quaerat commodi suscipit sequi? Quos harum laboriosam, mollitia qui ipsum tenetur maiores asperiores quia, ullam consequuntur perspiciatis ab voluptate eum modi veritatis alias iusto, natus officia quo exercitationem consectetur nulla debitis dolore! Molestias fuga dolorem quaerat ad eaque tempore nihil quis, placeat consequatur id. Accusantium voluptatum natus nihil asperiores hic aspernatur sequi. Nihil molestias, consequatur cum distinctio consequuntur sapiente soluta, cumque totam omnis incidunt aliquam quae, vero possimus itaque quia? Temporibus porro recusandae impedit deserunt ratione tempore optio necessitatibus sint?</p>
            </div>
            <div className="d-flex justify-content-center team-detail_icon">
                <li><a href={`https://${strTwitter}`} target="_blank" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#" target="_blank" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href={`https://${strYoutube}`} target="_blank" className="youtube"><FontAwesomeIcon icon={faYoutube} /></a></li>
            </div>
        </div>
    );
};

export default TeamDetailBody;