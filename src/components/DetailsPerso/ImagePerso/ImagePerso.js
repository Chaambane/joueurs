import React from 'react';
import ImagePlayer1 from '../../../assets/images/persos/player1.png';
import ImagePlayer2 from '../../../assets/images/persos/player2.png';
import ImagePlayer3 from '../../../assets/images/persos/player3.png';
import Classes from './ImagePerso.module.css'

const imagePerso = (props) => {
    /*Je test le choix de mon image en stockant la props du state dans choixImg */
    let choixImg;
    choixImg = props.persoImg;
    if(choixImg === 1) choixImg = ImagePlayer1;
    else if(choixImg === 2) choixImg = ImagePlayer2;
    else if(choixImg === 3) choixImg = ImagePlayer3;
    // switch(choixImg) {
    //     case 1:
    //         choixImg = ImagePlayer1;
    //     break;
    //     case 2: 
    //         choixImg = ImagePlayer2;
    //     break;
    //     case 3: 
    //         choixImg = ImagePlayer3;
    //     break;
    //     default:
    //         return null;
    // }

    return(
        <div className="row no gutters align-items-center container">
            <div className={["col-1", Classes.fleche, Classes.gauche].join(' ')} onClick={()=> console.log("Moins")}></div>
            <div className="col text-center">
                <img src={choixImg} alt="imgPerso"/>
            </div>
            <div className={["col-1", Classes.fleche, Classes.droite].join(' ')} onClick={()=> console.log("Plus")}></div>
        </div>
    )
};

export default imagePerso;