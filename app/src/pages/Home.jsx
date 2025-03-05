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
        </section>
        </main>
        </>
    )
}

export default Home;
