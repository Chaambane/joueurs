import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';
import DetailsPerso from '../../components/DetailsPerso/DetailsPerso';
import Armes from '../../components/Armes/Armes';

class JoueursManager extends Component {
    state = {
        personnage:{
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0,
            arme: null
        },
        pointCarac: 7,
        armes: ["epee", "fleau", "arc", "hache"]
    }

    /*la fonction rajoute 1 à l'image pour changer de personnages tant que le chiffre vaut entre 1 et 3. */
    handleNextImage = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage}
            /**Si je clique sur le bouton est que l'image vaut 3 alors je veux revenir à l'image 1 */
            if(oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image++;
            return{ personnage: newPersonnage }
        });
    };

    handlePreviousImage = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image <= 1) newPersonnage.image = 3;
            else newPersonnage.image--;
            return{ personnage: newPersonnage }
        });
    };
    
    /**La fonction doit mettre à jour une caractéristique d'un joueur en rajouter des points tant que la caractéristique en contient moins de 5 et que pointCarac dans les state soit supérieur à 1. */
    handleRajouterPoints = (carac) => {
        this.setState((oldState) => {
            if(oldState.personnage[carac] >= 5 || oldState.pointCarac <= 0) return null; /**On test si la caractéristique à moins de 5 points et si le nombre de points disponible est supérieur à 1 */
        const newPointCarac = oldState.personnage[carac] + 1; /**Si le test et passé alors on recupère l'ancienne valeur de la caractérsitque cliqué et on lui rajoute 1*/
            const newPersonnage = {...oldState.personnage}; /**On duplique le personnage pour respecter l'umutabilité de React */
            const newnPointCaracDispo = oldState.pointCarac - 1; /**On enlève 1 au nombre de points disponible */
            newPersonnage[carac] = newPointCarac; /**On affecte la nouvelle valeur de point à la caractéristique du personnage */
            return{
                personnage: newPersonnage,
                pointCarac: newnPointCaracDispo
            }
        });
    };

    /**La fonction  met à jour une caractéristique d'un joueur en supprimant des points tant que la caractéristique ne vaut pas 0 et que les points de caractéristique ne sont pas égale à 7. */
    handleEnleverPoints = (carac) => {
        this.setState((oldState) => {
            if(oldState.personnage[carac] <= 0 || oldState.pointCarac >= 7) return null; /**On vérifie la condition*/
            const newPointCarac = oldState.personnage[carac] - 1; /**On met à jour la caractéristique cliqué en soutrayant 1*/
            const newPersonnage = {...oldState.personnage}; /**On duplique le personnage */
            const newPointCaracDispo = oldState.pointCarac + 1; /**On additionne 1 à l'ancienne valeur de pointCarac */
            newPersonnage[carac] = newPointCarac; /**On affecte la nouvelle valeur de point au personnage */
            return { /**On retourne le composant avec les MAJ */
                personnage: newPersonnage,
                pointCarac: newPointCaracDispo
            }
        });
    };

    /**La fonction handleChoixArmePersonnage reçoit en paramètre l'arme cliqué, ensuite on procède à la modification de la valeur du personnage en procédant à la fusion des données. */
    handleChoixArmePersonnage = (arme) => {
            const newPersonnage = {...this.state.personnage};
            newPersonnage.arme = arme;
            this.setState({personnage: newPersonnage});
    }

    /**La fonction handleReinitialiserCreationPerso devra permettre à l'utilisateur de revenir à l'état initiale de création d'un personnage.*/
    handleReinitialiserCreationPerso = () => {
        this.setState({
            personnage:{
                image: 1,
                force: 0,
                agilite: 0,
                intelligence: 0,
                arme: null
            },
            pointCarac: 7,
            armes: ["epee", "fleau", "arc", "hache"]
        })
    }

    render() {
        return (
            <main className="container">
                <TitleH1>Créateur de personnage</TitleH1>
                <DetailsPerso {...this.state.personnage}
                    nextImage={this.handleNextImage}
                    previousImage={this.handlePreviousImage}
                    pointsDispo = {this.state.pointCarac}
                    enleverPoints={this.handleEnleverPoints}
                    rajouterPoints={this.handleRajouterPoints}
                />
                <Armes listeArmes = {this.state.armes} 
                    changeArmePerso={this.handleChoixArmePersonnage} 
                    etatArme={this.state.personnage.arme}
                />
                <div className="row no-gutters">
                    <div className="col-6">
                        <Button clrBtn="btn-danger" clic={this.handleReinitialiserCreationPerso}>Réinitialiser</Button>
                    </div>
                    <div className="col-6">
                        <Button clrBtn="btn-success" clic={this.handleValiderMonPersonnage}>Créer</Button>
                    </div>
                </div>
            </main>
        )
    };
}

export default JoueursManager;