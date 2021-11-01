import React from 'react';
import ImagePerso from './ImagePerso/ImagePerso';
import CaracPerso from './CaracPerso/CaracPerso';

const detailsPerso = (props) => (
    <div className="row no-gutters">
        <div className="col-6">
            <ImagePerso persoImg={props.image}
                nextImage={props.nextImage}
                previousImage={props.previousImage}
            />
        </div>
        <div className="col-6">
            <CaracPerso
                pointsDispo={props.pointsDispo}
                force= {props.force}
                agilite= {props.agilite}
                intelligence= {props.intelligence}
            />
        </div>
    </div>
);

export default detailsPerso;