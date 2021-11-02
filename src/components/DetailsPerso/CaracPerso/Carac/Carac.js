/**Le composant carac renvoie l'affichage d'une caractéristique d'un joueur déclaré dans les state Personnage */
import React from 'react';
import Classes from './Carac.module.css';


const carac = (props) => {
    // La boucle parcours la propriété nbpoints et renvoie le nombre de points dans une div avec la propriété css points, puis les div sont stockés dans pointsCss qui sera retourné dans l'affichage.
    let pointCss = [];
    for(let i = 0; i < props.nbPoints; i++){
        pointCss.push(<div key={i} className={Classes.points}></div>);
    }
    return(
        <div className="d-flex flex-row">
            <div className={[Classes.signe, Classes.moins].join(' ')} onClick={props.lessPoints}></div>
            <div>{props.children} :</div> {pointCss}
            <div className={[Classes.signe, Classes.plus].join(' ')} onClick={props.addPoints}></div>
        </div>
    )
};

export default carac;