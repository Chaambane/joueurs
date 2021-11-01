import React from 'react';
import ImagePerso from './ImagePerso/ImagePerso';

const detailsPerso = (props) => (
    <div className="row no-gutters">
        <div className="col-6">
            <ImagePerso persoImg={props.image}/>
        </div>
        <div className="col-6">
            force: {props.force} <br />
            Agilité: {props.agilite} <br />
            Intélligence: {props.intelligence}
        </div>
    </div>
);

export default detailsPerso;