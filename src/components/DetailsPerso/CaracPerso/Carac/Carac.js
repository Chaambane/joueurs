/**Le composant carac renvoie l'affichage d'une caractéristique d'un joueur déclaré dans les state Personnage */
import React from 'react';
import Classes from './Carac.module.css';


const carac = (props) => {
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