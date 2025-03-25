import "./home.css";
import ModalHome from "../components/Modal-home";

// voir utilisation de reactstrap : des composants interessants a étudier

const Home = () => {
    return (
        <>
        <main>
         {/* a retravailler : dimentions, background image  = voir sur les autres méthodes avec bootstrap (avec filtre) */}
        <section className="hero text-center text-white align-content-center">
            
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            
            <ModalHome class="modal-dialog-centered" />
        </section>
        <section class="p-5">
            
            <div class="card shadow border-0 container" style={{width: "80%"}}>
                <div class="row">
                    <div class="card-body col-md-6">
                        <h2 class="card-title">A propos</h2>
                        <hr class="border opacity-100 border-primary border-2 mb-5"/>
                        <img src="./src/assets/images/john-doe-about.jpg" class="img-fluid" alt="un homme travaillant à son bureau"></img>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere maximus urna sit amet suscipit.
                             Fusce gravida felis sit amet eros viverra efficitur sed vel leo. Aliquam vitae ante augue.</p>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere maximus urna sit amet suscipit.
                             Fusce gravida felis sit amet eros viverra efficitur sed vel leo. Aliquam vitae ante augue.</p>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere maximus urna sit amet suscipit.
                             Fusce gravida felis sit amet eros viverra efficitur sed vel leo. Aliquam vitae ante augue.</p>
                    </div>
                
                    <div class="card-body col-md-6">
                        <h2 class="card-title">Mes compétences</h2>
                        <hr class="border opacity-100 border-primary border-2 mb-5"/>
                        <h3 className="text-uppercase ">html5 90%</h3>
                            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-danger" style={{width: "90%"}}></div>
                            </div>
                            <br />
                        
                        <h3  className="text-uppercase ">css3 80%</h3>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-info " style={{width: "80%"}}></div>
                            </div>
                            <br />

                        <h3  className="text-uppercase ">javascript 70%</h3>
                            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-warning" style={{width: "70%"}}></div>
                            </div>
                            <br />

                        <h3  className="text-uppercase">php 60%</h3>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success " style={{width: "60%"}}></div>
                            </div>
                            <br />

                        <h3  className="text-uppercase">react 50%</h3>  
                            <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-primary" style={{width: "50%"}}></div>
                            </div>
                            
                    </div>
                </div>
            </div>

            
        </section>
        </main>
        </>
    )
}

export default Home;
