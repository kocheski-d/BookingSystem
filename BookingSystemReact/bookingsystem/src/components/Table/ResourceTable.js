import React, { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';

const ResourceTable = (props) => {

    const [selectedResource, setSelectedResource] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (resource) => {
        setSelectedResource(resource);
        setModalOpen(!modalOpen);
    }
    
    return (
        <React.Fragment>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.resources.map((item, itemIndex) => {
                    return (
                        <tr key={itemIndex}>
                            <td>{itemIndex+1}</td>
                            <td>{item.name}</td>
                            <td><button className="btn btn-primary" onClick={() => openModal(item)}>Book here</button></td>
                        </tr>
                    )
                })}
            </tbody>
            </Table>
            {modalOpen && (
                <ModalComponent
                    resource={selectedResource}
                    show={modalOpen}
                    hide={() => setModalOpen(false)}
                />
            )
            
            }
        </React.Fragment>
    )
}
export default ResourceTable;