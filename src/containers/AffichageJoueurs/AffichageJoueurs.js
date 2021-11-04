import React, {Component} from 'react';
import axios from 'axios';
import CardJoueur from './CardJoueur/CardJoueur';
import TitleH1 from '../../components/TitleH1/TitleH1';


class AffichageJoueurs extends Component {
    state= {
        mesJoueurs: null,
        loading: false
    }

    // La fonction récupère les données des personnages crées dans la BD et met à jour le state mesJoueurs.
    componentDidMount = () => {
        this.setState({loading:true});
        axios.get('https://create-perso-default-rtdb.firebaseio.com/persos.json')
            .then(response => {
                // console.log(response.data);
                const mesJoueurs = Object.values(response.data);
                this.setState({
                    mesJoueurs,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:true});
            })
    }
    render() {
        return (
            <section className="container d-flex flew-wrap mt-2">
            {
                this.state.loading && // J'utilise un spinner pour rendre le téléchargement de mes données visible.
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {
                !this.state.loading && this.state.mesJoueurs && // On test si le chargement est fini et si la valeurs de mes joueurs est true
                <div className="row no-gutters">
                    {
                        this.state.mesJoueurs.map((joueur, index) => {
                            return(
                                <div className="col-5 m-3 mt-2" key={index}>
                                    <TitleH1>{joueur.nom}</TitleH1>
                                    <CardJoueur
                                        {...joueur}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            }
            </section>
        )
    };
}

export default AffichageJoueurs;