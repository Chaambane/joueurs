import React from 'react';

import ImagePlayer1 from '../../../assets/images/persos/player1.png';
import ImagePlayer2 from '../../../assets/images/persos/player2.png';
import ImagePlayer3 from '../../../assets/images/persos/player3.png';

import Arc from '../../../assets/images/armes/arc.png';
import Epee from '../../../assets/images/armes/epee.png';
import Fleau from '../../../assets/images/armes/fleau.png';
import Hache from '../../../assets/images/armes/hache.png';

const cardJoueur = (props) => {
    let choixImg;
    choixImg = props.monPersonnage.image;
    if(choixImg === 1) choixImg = ImagePlayer1;
    else if(choixImg === 2) choixImg = ImagePlayer2;
    else if(choixImg === 3) choixImg = ImagePlayer3;

    let choixArme;
    choixArme = props.monPersonnage.arme;
    if(choixArme === "arc") choixArme = Arc;
    else if(choixArme === "epee") choixArme = Epee;
    else if(choixArme === "fleau") choixArme = Fleau;
    else if(choixArme === "hache") choixArme = Hache;

    return(
        <div className="row no-gutters fw-bold border border-info rounded ">
            <div className="col-6">
                <img src={choixImg} alt={props.nomJoueur} />
            </div>
            <div className="col-6">
                <div>
                    Force : {props.monPersonnage.force} <br />
                    Agilité : {props.monPersonnage.agilite} <br />
                    Intélligence :  {props.monPersonnage.intelligence}
                    <img src={choixArme} alt={props.nom} className="text-center" />
                </div>
            </div>
        </div>
    )
};

export default cardJoueur;