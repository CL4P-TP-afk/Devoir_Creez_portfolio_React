import { Container,  Row,  Col,  CardTitle, CardBody, Card } from "reactstrap";
import FormulaireContact from "../components/Formulaire-Contact";
import AddressJD from "../content/AddressJD";

const Contact = () => {
  // method window.scrollTo ne fonctionne que dans certain cas ici pourquoi ?
  window.scrollTo(0, 0);
  return (
    <>
      <Container className=" h-100 py-4 my-4">
        <Row className="justify-content-center py-3 my-3 text-center">
          <h1>Contact</h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr className="border border-primary border-3 opacity-100 my-3" style={{ width: "40%" }} />
        </Row>
        <Row className="py-3">
          <Card className="shadow border-0">
            <Row>
              <Col md="6">
                <CardBody>
                  <CardTitle tag="h2">Formulaire de contact</CardTitle>
                  <hr className="border border-primary border-2 opacity-100" />
                  <FormulaireContact />
                </CardBody>
              </Col>
              <Col md="6">
                <CardBody>
                  <CardTitle tag="h2">Mes coordonnées</CardTitle>
                  <hr className="border border-primary border-2 opacity-100" />
                  <AddressJD />                  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524681965!2d4.796398612379265!3d45.77866197096023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1743173701021!5m2!1sfr!2sfr"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
