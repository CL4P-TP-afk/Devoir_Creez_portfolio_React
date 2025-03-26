import {Container, Row, Col, CardTitle, CardText, Button , CardBody , CardFooter, CardHeader, Card, Form, Label, FormGroup, Input } from 'reactstrap';



const Contact = () => {
    return (
        <>
            <Container className=" h-100 py-4" >

                <Row  className='justify-content-center py-3 text-center'>                  
                    <h1>Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci 
                        de remplir le formulaire de contact.</p>   
                    <hr className='border border-primary border-3 opacity-100 my-4 ' style={{width:"40%"}} />                  
                </Row>

                <Row>
                    <Card className='shadow border-0'>
                        <Row>
                            <Col md="6">
                                <CardBody>
                                    <CardTitle tag="h2">Formulaire de contact</CardTitle>
                                    <hr className="border border-primary border-2 opacity-100" />
                                    <Form>
                                        
                                            <Label for='nom'/>
                                            <Input
                                                id="nom"
                                                name="nom"
                                                placeholder="Votre nom"
                                                type="text"
                                                />                                           
                                                                               
                                            <Label for="email"/>
                                            <Input
                                                id="email"
                                                name="email"
                                                placeholder="Votre adresse email"
                                                type="email"
                                                />

                                            <Label for="tel"/>
                                            <Input
                                                id="tel"
                                                name="tel"
                                                placeholder="Votre numéro de téléphone"
                                                type="tel"
                                                />
                                            <Label for='sujet'/>
                                            <Input
                                                id="sujet"
                                                name="sujet"
                                                placeholder="Sujet"
                                                type="text"
                                                />
                                            <Label for='message'/>
                                            <Input
                                                id="message"
                                                name="message"
                                                placeholder="Votre message"
                                                type="textarea"
                                                size=""
                                                />                                                          
                                        
                                        <Button href="#" tag="a" color="primary" type="submit" value="Submit">Envoyer</Button>
                                        {/* <Button href="#" tag="input" color="primary" type="submit" value="Submit">Envoyer</Button> */}
                                    </Form>
                                </CardBody>
                            </Col>
                            <Col md="6">
                                <CardBody >
                                    <CardTitle tag="h2">Mes coordonnées</CardTitle>
                                    <hr className="border border-primary border-2 opacity-100" />
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>    
                    
                </Row>

            </Container>
            
        </>
    )
}

export default Contact;
