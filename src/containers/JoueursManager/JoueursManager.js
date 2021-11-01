import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';

class JoueursManager extends Component {
    render() {
        return (
            <main className="container">
                <TitleH1>Créateur de personnage</TitleH1>
                <div>Personnages</div>
                <div>Armes</div>
                <div>
                    <Button clrBtn="btn-danger" clic={() => console.log("Réinitialiser")}>Réinitialiser</Button>
                    <Button clrBtn="btn-success" clic={() => console.log("Créer")}>Créer</Button>
                </div>
            </main>
        )
    };
}

export default JoueursManager;