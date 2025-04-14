import { Container, Row, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import React, { useState } from "react";
import AddressJD from "../content/AddressJD";
import { Link } from "react-router-dom";

const MentionsLegales = (props) => {
  window.scrollTo(0, 0);
  
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <Container className=" h-100 py-4">
        <Row className="justify-content-center py-3 text-center">
          <h1>Mentions légales</h1>
          <hr
            className="border border-primary border-3 opacity-100 my-4 "
            style={{ width: "40%" }}
          />
        </Row>
        <Row>
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">Editeur du site</AccordionHeader>
              <AccordionBody accordionId="1">
                <AddressJD />
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Hébergeur</AccordionHeader>
              <AccordionBody accordionId="2">
                <h2>alwaysdata</h2>
                <address>
                  91 Rue du faubourg Saint-Honoré, 75008 Paris <br />
                  <Link to="https://www.alwaysdata.com"  target="_blank"> www.alwaysdata.com</Link>
                </address>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Crédits</AccordionHeader>
              <AccordionBody accordionId="3">
                <h2>Crédits</h2>
                <p>
                  Ce site a été réalisé par John Doe, étutudiant au{" "}
                  <Link
                    to="https://www.centre-europeen-formation.fr/"
                    target="_blank"
                  >
                    {" "}
                    Centre Européen de formation.
                  </Link>
                </p>
                <br />
                <p>
                  <em>
                    Les images utilisées sur ce site sont libre de droits et ont
                    été obtenues sur le site{" "}
                    <Link to="https://pixabay.com/fr/" target="_blank">
                      Pixabay
                    </Link>
                  </em>
                </p>
                <br />
                <p>
                  <em>
                    Lafavicon de ce site a été fournie par{" "}
                    <Link
                      to="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                      target="_blank"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </Link>
                  </em>
                </p>
                <br />
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Row>
      </Container>
    </>
  );
};

export default MentionsLegales;