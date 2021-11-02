import React from 'react';
import Epee from '../../assets/images/armes/epee.png';
import Arc from '../../assets/images/armes/arc.png';
import Fleau from '../../assets/images/armes/fleau.png';
import Hache from '../../assets/images/armes/hache.png';
import Arme from './Arme/Arme';


const armes = (props) => {
    return(
        <div className="row no-gutters text-center">
            {
                props.listeArmes.map(arme => {
                    let choixArme;
                    switch(arme) {
                        case "epee": choixArme = Epee;
                        break;
                        case "arc": choixArme = Arc;
                        break;
                        case "fleau": choixArme = Fleau;
                        break;
                        case "hache": choixArme = Hache;
                        break;
                        default: return null;
                    }
                    return (
                        <div className="col-3">
                            <Arme key={arme} imgArme={choixArme}>{arme}</Arme>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default armes;