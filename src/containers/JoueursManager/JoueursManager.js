import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';
import DetailsPerso from '../../components/DetailsPerso/DetailsPerso';

class JoueursManager extends Component {
    state = {
        personnage:{
            image: 3,
            force: 0,
            agilite: 0,
            intelligence: 0
        }
    }
    render() {
        return (
            <main className="container">
                <TitleH1>Créateur de personnage</TitleH1>
                <DetailsPerso {...this.state.personnage}/>
                <div>Armes</div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <Button clrBtn="btn-danger" clic={() => console.log("Réinitialiser")}>Réinitialiser</Button>
                    </div>
                    <div className="col-6">
                        <Button clrBtn="btn-success" clic={() => console.log("Créer")}>Créer</Button>
                    </div>
                </div>
            </main>
        )
    };
}

export default JoueursManager;