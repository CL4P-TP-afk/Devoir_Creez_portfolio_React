import {Row, Col, Container} from 'reactstrap';
import CardPortfolio from '../components/card-portfolio';

const Portfolio = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <img src="../src/assets/images/banner.jpg" 
                 alt="ligne lumineuse droite puis partant dans tous les sens sur fond bleu foncé" 
                 class="img-fluid w-100" />
            
            <Container className=" h-100 py-3 my-3">
                <Row className='justify-content-center py-3 my-3 text-center'>
                        <h1>Portfolio</h1>
                        <p>voici quelques-unes de mes réalisations.</p>   
                        <hr className='border border-primary border-3 opacity-100 my-3' style={{width:"40%"}} />
                </Row>
                <Row className='py-3'>
                    <Col md="4" className='p-2' >
                        <CardPortfolio 
                            alt="un panier de légumes" 
                            src="../src/assets/images/portfolio/fresh-food.jpg" 
                            title="Fresh Food" 
                            text="Site de vente de produits frais en ligne"
                            footer="Site réalisé avec PHP et MySQL"
                        />                    
                    </Col>
                    <Col md="4" className='p-2'>
                        <CardPortfolio 
                            alt="un plateau de sushi" 
                            src="../src/assets/images/portfolio/restaurant-japonais.jpg" 
                            title="Restaurant Akira" 
                            text="Site de vente de produits frais en ligne"
                            footer="Site réalisé avec WordPress"
                        />                
                    </Col>
                    <Col md="4" className='p-2'>
                        <CardPortfolio 
                            alt="statue de la tête de boudha à côté de 4 galets empilés sur fond d'image d'un soleil couchant" 
                            src="../src/assets/images/portfolio/espace-bien-etre.jpg" 
                            title="Espace bien-être" 
                            text="Site de vente de produits frais en ligne"
                            footer="Site réalisé avec LARAVEL"
                        /> 
                    </Col>                
                
                    <Col md="4" className='p-2'>
                        <CardPortfolio 
                            alt="S E O en titre entouré de termes techniques s'y référant sur fond bleu" 
                            src="../src/assets/images/portfolio/seo.jpg" 
                            title="SEO" 
                            text="Amélioration du référencement d'un site e-commerce"
                            footer="Utilisation des outils SEO"
                        />                
                    </Col>
                    <Col md="4" className='p-2'>
                        <CardPortfolio 
                            alt="capture d'écran de lignes de codes " 
                            src="../src/assets/images/portfolio/coder.jpg" 
                            title="Création d'une API" 
                            text="Création d'une API RESTFULL publique"
                            footer="PHP-SYMFONY"
                        />                    
                    </Col>
                    <Col md="4" className='p-2'>
                        <CardPortfolio 
                            alt="une tablette, un ordinateur portable et un ordinateur de bureau posés sur un bureau" 
                            src="../src/assets/images/portfolio/screens.jpg" 
                            title="Maquette d'un site web" 
                            text="Création du prototype d'un site"
                            footer="Réalisé avec FIGMA"
                        /> 
                    </Col>               
                </Row>
            </Container>            
        </>
    );
};

export default Portfolio;
