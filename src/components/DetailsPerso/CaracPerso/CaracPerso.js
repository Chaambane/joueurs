/**Le composant CaracPerso reçois le composant carac et renvoie l'affichage des nombre de points restant*/
import React from 'react';
import Carac from './Carac/Carac';

const caracPerso = (props) => {
    return(
        <div className="fw-bold container">
            <div>
                Points restants: <span className="badge bg-success">{props.pointsDispo}</span><br />
            </div>
            {/** - nbPoints stock la valeur des points dans les state et les envoient au composant Carac.
            - lessPoints et addPoints qui sont des evenemnt onClick sur le bouton plus et moins dans carac
             éxécute les fonctions qu'elle reçoits en props pour enlever et rajouter des points sur une caractéristique.*/}
            <Carac nbPoints={props.force}
                lessPoints={() => props.enleverPoints('force')}
                addPoints={() => props.rajouterPoints('force')}
            >Force</Carac>
            <Carac nbPoints={props.agilite}
                lessPoints={() => props.enleverPoints('agilite')}
                addPoints={() => props.rajouterPoints('agilite')}
            >Agilité</Carac>
            <Carac nbPoints={props.intelligence}
                lessPoints={() => props.enleverPoints('intelligence')}
                addPoints={() => props.rajouterPoints('intelligence')}
            >Intélligence</Carac>
        </div>
    )
};

export default caracPerso;