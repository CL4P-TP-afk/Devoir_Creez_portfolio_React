import { Link } from "react-router-dom";
import "./links-styles.css";

const Lien = (props) => {
  return (
    <li>
      <Link
        to={props.page}
        className="text-white footer-lien"
      >
        {props.lien}
      </Link>
    </li>
  );
};


const Foot = () => {
  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container p-4">
          <div className="row">

            <div className="col-lg-4 col-md-4 mb-4 mb-md-0 text-start">
              <h2 className="">John Doe</h2>
              <address>
                40 rue Laure Diebold <br></br>
                69009 Lyon,France<br></br>
                <Link to="tel: 1020304050" className="text-decoration-none text-white">10 20 30 40 50</Link> 
              </address>
              
            </div>

            <div className="col-lg-4 col-md-4 mb-4 mb-md-0 ">
              <h2 className="">Liens utiles</h2>
              <ul className="list-unstyled mb-0 ">
                <Lien lien="Accueil" page="/" />
                <Lien lien="Services" page="/services" />
                <Lien lien="Portofolio" page="/portfolio" />
                <Lien lien="Contact" page="/contact" />
                <Lien lien="Mentions légales" page="/mentionslegales" />                
              </ul>
            </div>

            <div className="col-lg-4 col-md-4 mb-4 mb-md-0">
              <h2 className=" ">Mes dernières réalisations</h2>
              <ul className="list-unstyled">
                <Lien lien="Fresh Food" page="/portfolio" />
                <Lien lien="Restaurant Akira" page="/portfolio" />
                <Lien lien="Espace bien-être" page="/portfolio" />
                <Lien lien="SEO" page="/portfolio" />
                <Lien lien="Création d'une API" page="/portfolio" />
                <Lien lien="Maquette d'un site" page="/portfolio" />                
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Foot;
