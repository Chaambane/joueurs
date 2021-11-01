import React from 'react';
import Classes from './Carac.module.css';

const caracPerso = (props) => {
    return(
        <div className="fw-bold container">
            <div>
                Points restants: <span className="badge bg-success">{props.pointsDispo}</span><br />
            </div>
            Force : {props.force} <br />
            Agilité: {props.agilite} <br />
            Intélligence: {props.intelligence}
        </div>
    )
};

export default caracPerso;