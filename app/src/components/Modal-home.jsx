import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalHome = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <>           
        <Button color="danger" onClick={toggle}>En savoir plus</Button>

        <Modal className="modal-dialog modal-dialog-centered" isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>
                <h2>Modal title</h2>
            </ModalHeader>
            <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Fermer</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default ModalHome;