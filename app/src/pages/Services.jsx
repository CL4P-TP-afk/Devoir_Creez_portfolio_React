import "./card-effect.css";
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { Helmet } from 'react-helmet';

const Services = () => {
    window.scrollTo(0,0);
    return (
        <> 
        <Helmet>
            <title>Devoir React.js: Services</title>
            <meta name="description" content="les services de developpeement web que John Doe propose" />
        </Helmet>           
            <img src="./src/assets/images/banner.jpg" alt="ligne lumineuse droite puis partant dans tous les sens sur fond bleu foncé" class="img-fluid w-100" />            
            <Container className=" h-100 py-3 mt-2 mb-3">
                <Row className='justify-content-center py-3 my-2 text-center'>                    
                    <h1>Mon offre de services</h1>
                    <p>voici les prestations sur lesquelles je peux intervenir</p>
                    <hr className='border border-primary border-3 opacity-100 my-3' style={{width:"40%"}} />
                </Row>            
                <Row className='py-2 my-3'>
                    <Col md="4" className='p-2'>
                        <Card className="h-100 text-center card-hover m-1">
                            <CardBody>
                                <div className="my-4 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="blue" class="bi bi-brush " viewBox="0 0 16 16">
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z"/>
                                    </svg>
                                </div>
                                <CardTitle tag="h2">UX Design</CardTitle>
                                <CardText>L'UX Design est une discipline qui consiste à consevoir des produits (sites web, applications mobiles, logiciels, 
                                    objets connectés, ect.) en plaçant l'utilisateur au centre des préocupations. L'objectif est de rendre l'expérience utilisateur 
                                    la plus fluide et agréable possible.
                                </CardText>                                
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className='p-2'>
                        <Card className=" h-100 text-center card-hover  m-1">
                            <CardBody>
                                <div className="my-4 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="blue" class="bi bi-code-slash" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                                    </svg>
                                </div>
                                <CardTitle tag="h2">Développement web</CardTitle>
                                <CardText>Le développement de site web consiste à créer des sites internet en utilisant des langages de 
                                    programmation (HTLM, CSS, JavaScript, PHP, ect.) et des frameworks (Boostrap, React, Angular, etc.).
                                </CardText>                                    
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className='p-2'>
                        <Card className=" h-100 text-center card-hover  m-1">
                            <CardBody>
                                <div className="my-4 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="blue" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                </div>
                                <CardTitle tag="h2">Référencement</CardTitle>
                                <CardText>Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter 
                                    dans les résultats des moteurs de recherche (Google, bing, Yahoo, ect.). L'objectif est d'attirer un maximum de visiteurs qualifiés 
                                    sur le site.
                                </CardText>                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Services;
