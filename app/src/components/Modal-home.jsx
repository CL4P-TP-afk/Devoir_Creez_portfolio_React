import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalHomeContent from '../content/Modal-home-content';


const ModalHome = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <>           
        <Button color="danger" onClick={toggle}>En savoir plus</Button>

        <Modal className="modal-dialog modal-lg modal-dialog-centered " data-bs-theme="dark" isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle} className='bg-dark text-white '>
                <h2>Mon profil GitHub</h2>
            </ModalHeader>
            <ModalBody className='bg-dark text-white'>
                <ModalHomeContent />
            </ModalBody>
            <ModalFooter className='bg-dark text-white'>
                <Button color="secondary" onClick={toggle}>Fermer</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default ModalHome;