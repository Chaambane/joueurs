/**Le composant CaracPerso reçois le composant carac et renvoie l'affichage des nombre de points restant*/
import React from 'react';
import Carac from './Carac/Carac';

const caracPerso = (props) => {
    return(
        <div className="fw-bold container">
            <div>
                Points restants: <span className="badge bg-success">{props.pointsDispo}</span><br />
            </div>
            {/**nbPoints stock la valeur des points dans les state et les envoient au composant Carac */}
            <Carac nbPoints={props.force}>Force</Carac>
            <Carac nbPoints={props.agilite}>Agilité</Carac>
            <Carac nbPoints={props.intelligence}>Intélligence</Carac>
        </div>
    )
};

export default caracPerso;