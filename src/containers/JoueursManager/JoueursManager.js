import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';
import DetailsPerso from '../../components/DetailsPerso/DetailsPerso';
import Armes from '../../components/Armes/Armes';
import axios from 'axios';
import AffichageJoueurs from '../AffichageJoueurs/AffichageJoueurs';

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
        armes: null,
        loading: false,
        createurPerso: ""
    }

    // Axios va essayer de récupérer les informations dès lors que l'application est chargée,je vais les récupérer en Json ensuite je les place dans un tableau avec Object.value, enfin je ferai un setState pour mettre à jour la valeur de armes dans les states. 
    componentDidMount = () => {
        this.setState({loading: true});
        axios.get('https://create-perso-default-rtdb.firebaseio.com/armes.json') // Ne pas oublie le .Json
            .then(response => {
                // console.log(response);
                const tableauArmes = Object.values(response.data);
                // console.log(tableauArmes);
                this.setState({
                    armes: tableauArmes,
                    loading: false
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading: false
                })
            })
    };

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
            armes: ["epee", "fleau", "arc", "hache"],
            loading: false,
            createurPerso: ""
        })
    };

    /**La fonction handleValiderMonPersonnage devra permettre la sauvegarde de mon personnage et de la personne qui la créer dans la base de donné Firebase*/
    handleValiderMonPersonnage = () => {
        this.setState({loading: true});
        const joueur = {
            nom: this.state.createurPerso,
            monPersonnage: {...this.state.personnage}
        }
        axios.post('https://create-perso-default-rtdb.firebaseio.com/persos.json',joueur) // On rentre l'url de la BD et le nom de la collection qu'on veut créer dans la BD après l'envoie ici c'est perso.json auquel on rajoute le personnage créer ici joueur.
            .then(response => {
                console.log(response);
                this.setState({loading: false})
                this.handleReinitialiserCreationPerso();
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false})
                this.handleReinitialiserCreationPerso();
            })
        // Après la création du personnage je reinitialise les données.
    };

    render() {
        return (
            <main className="container">
                <TitleH1>Créateur de personnage</TitleH1>

                <div className="input-group flex-nowrap">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Nom du Personnage" 
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                        value={this.state.createurPerso}
                        onChange={(e) => this.setState({createurPerso: e.target.value})}
                    />
                </div>

                <DetailsPerso {...this.state.personnage}
                    nextImage={this.handleNextImage}
                    previousImage={this.handlePreviousImage}
                    pointsDispo = {this.state.pointCarac}
                    enleverPoints={this.handleEnleverPoints}
                    rajouterPoints={this.handleRajouterPoints}
                />
                {
                    this.state.loading &&
                    <button className="btn btn-info" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                }
                {/**Je teste si armes dans les states et à true j'affiche les armes sinon je laisse un vide. */}
                {
                    this.state.armes &&
                    <Armes listeArmes = {this.state.armes} 
                        changeArmePerso={this.handleChoixArmePersonnage} 
                        etatArme={this.state.personnage.arme}
                    />
                }
                <div className="row no-gutters">
                    <div className="col-6">
                        <Button clrBtn="btn-danger" clic={this.handleReinitialiserCreationPerso}>Réinitialiser</Button>
                    </div>
                    <div className="col-6">
                        <Button clrBtn="btn-success" clic={this.handleValiderMonPersonnage}>Créer</Button>
                    </div>
                </div>
                <AffichageJoueurs/>
            </main>
        )
    };
}

export default JoueursManager;