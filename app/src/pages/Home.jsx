import "./home.css";




const Home = () => {
    return (
        <>
        <main>
        <section className="hero text-center text-white align-content-center">
            
            <h1>Bonjour, je suis John Doe</h1>
            <h2>Développeur web full stack</h2>
            <button type="button" class="btn btn-danger">En savoir plus</button>
            
        </section>
        <section>
            <p>Une section contenant la présentation de John Doe et la liste de ses compétences (progress bar Bootstrap)</p>

            <div class="card container" style={{width: "80%"}}>
                <div class="row">
                    <div class="card-body col-md-6">
                        <h2 class="card-title">A propos</h2>
                        {/* <img src="..." alt="..."> */}
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                
                    <div class="card-body col-md-6">
                        <h2 class="card-title">Mes compétences</h2>
                        {/* <img src="..." alt="..."> */}
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <h3>html5 90%</h3>
            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-danger" style={{width: "90%"}}></div>
            </div>
            
            <h3>css3 80%</h3>
                <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info " style={{width: "80%"}}></div>
                </div>
            <h3>javascript 70%</h3>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-warning" style={{width: "70%"}}></div>
                </div>
            <h3>php 60%</h3>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success " style={{width: "60%"}}></div>
                </div>
            <h3>react 50%</h3>  
                <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-primary" style={{width: "50%"}}></div>
                </div>
        </section>
        </main>
        </>
    )
}

export default Home;
