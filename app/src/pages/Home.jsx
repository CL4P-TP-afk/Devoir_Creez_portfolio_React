import "./home.css";
import ModalHome from "../components/Modal-home";
import { Progress } from "reactstrap";
import { Helmet } from 'react-helmet';


const Home = () => {
    // permettre a chaques appel de la page de se positionner en haut de la page en utilisant la methode scrollTo()
    window.scrollTo(0, 0);
    return (
        <>
        <Helmet>
            <title>Devoir React.js: Accueil</title>
            <meta name="description" content="page de presentation de John Doe" />
        </Helmet>
        <main>
        <section className="hero text-center text-white align-content-center">
            
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            
            <ModalHome className="modal-dialog-centered" />
        </section>
        <section className="p-5">
            
            <div className="card shadow border-0 container" style={{width: "80%"}}>
                <div className="row">
                    <div className="card-body col-md-6">
                        <h2 className="card-title">A propos</h2>
                        <hr className="border opacity-100 border-primary border-2 mb-5"/>
                        <img src="./src/assets/images/john-doe-about.jpg" className="img-fluid" alt="un homme travaillant à son bureau"></img>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere maximus urna sit amet suscipit.
                             Fusce gravida felis sit amet eros viverra efficitur sed vel leo. Aliquam vitae ante augue.</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere maximus urna sit amet suscipit.
                             Fusce gravida felis sit amet eros viverra efficitur sed vel leo. Aliquam vitae ante augue.</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere maximus urna sit amet suscipit.
                             Fusce gravida felis sit amet eros viverra efficitur sed vel leo. Aliquam vitae ante augue.</p>
                    </div>                
                    <div className="card-body col-md-6">
                        <h2 className="card-title">Mes compétences</h2>
                        <hr className="border opacity-100 border-primary border-2 mb-5"/>
                        <h3 className="text-uppercase ">html5 90%</h3>
                        <Progress color="danger" value={90} />
                        <br />                        
                        <h3  className="text-uppercase ">css3 80%</h3>
                        <Progress color="info" value={80} />
                        <br />
                        <h3  className="text-uppercase ">javascript 70%</h3>
                        <Progress color="info" value={70} />
                        <br />
                        <h3  className="text-uppercase">php 60%</h3>
                        <Progress color="success" value={60} />
                        <br />
                        <h3  className="text-uppercase">react 50%</h3>  
                        <Progress color="primary" value={50} />                            
                    </div>
                </div>
            </div>            
        </section>
        </main>
        </>
    );
};

export default Home;
