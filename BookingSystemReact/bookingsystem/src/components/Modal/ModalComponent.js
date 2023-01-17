import React, { useState } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { resourceBooking } from "../../actions/booking/index";
import moment from 'moment';

const ModalComponent = (props) => {

    const { show, hide, resource, status, message, resourceBooking } = props;
    const [bookingResource, setBookingResource] = useState({ 
        resourceId: resource && resource.id, 
        DateFrom: '',
        DateTo: '',
        BookedQuantity: '',
    });

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        
        setBookingResource({ ...bookingResource, [name]: value });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        resourceBooking(bookingResource);
    }

    return (
        <React.Fragment>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>{resource && resource.name}</Modal.Title>
                </Modal.Header>
                <form onSubmit={onSubmitForm}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-sm-12">
                                <Form.Group controlId="date_from_picker" style={{ display: "inline-flex", width: "100%" }}>
                                    <div className="col-sm-6">
                                        <Form.Label>Date From</Form.Label>
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Control onChange={onChangeInput} min={new Date().toISOString().split("T")[0]} type="date" name="DateFrom" placeholder="Date From" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <Form.Group controlId="date_to_picker" style={{ display: "inline-flex", width: "100%" }}>
                                    <div className="col-sm-6">
                                        <Form.Label>Date To</Form.Label>
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Control onChange={onChangeInput} min={new Date().toISOString().split("T")[0]} type="date" name="DateTo" placeholder="Date To" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <Form.Group controlId="requested_quantity" style={{ display: "inline-flex", width: "100%" }}>
                                    <div className="col-sm-6">
                                        <Form.Label>Quantity</Form.Label>
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Control onChange={onChangeInput} type="number" name="BookedQuantity" placeholder="Requested Quantity" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-12">
                                <Form.Group controlId="message" style={{ display: "inline-flex", width: "100%" }}>
                                    <div className="col-sm-12 text-center">
                                        <Form.Label style={{ color: status ? "green" : "red" }}>{message}</Form.Label>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Book
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </React.Fragment>
    )

}

function mapStateToProps(state) {
    return { 
        status: state.booking.success,
        message: state.booking.message
    };
} 

export default connect(mapStateToProps, {
    resourceBooking
})(withRouter(ModalComponent));
// class ModalComponent extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             message: '',
//             status: true,
//         }
//     }

//     render () {
//         return (
//             <React.Fragment>
//                 <Modal show={this.props.show} onHide={this.props.hide}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>{this.props.resource && this.props.resource.name}</Modal.Title>
//                     </Modal.Header>
//                         <Modal.Body>
//                             <div className="row">
//                                 <div className="col-sm-12">
//                                     <Form.Group controlId="date_from_picker" style={{ display: "inline-flex", width: "100%" }}>
//                                         <div className="col-sm-6">
//                                             <Form.Label>Date From</Form.Label>
//                                         </div>
//                                         <div className="col-sm-6">
//                                             <Form.Control type="date" name="date_from" placeholder="Date From" />
//                                         </div>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                             <div className="row mt-4">
//                                 <div className="col-sm-12">
//                                     <Form.Group controlId="date_to_picker" style={{ display: "inline-flex", width: "100%" }}>
//                                         <div className="col-sm-6">
//                                             <Form.Label>Date To</Form.Label>
//                                         </div>
//                                         <div className="col-sm-6">
//                                             <Form.Control type="date" name="date_to" placeholder="Date To" />
//                                         </div>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                             <div className="row mt-4">
//                                 <div className="col-sm-12">
//                                     <Form.Group controlId="requested_quantity" style={{ display: "inline-flex", width: "100%" }}>
//                                         <div className="col-sm-6">
//                                             <Form.Label>Quantity</Form.Label>
//                                         </div>
//                                         <div className="col-sm-6">
//                                             <Form.Control type="number" name="requested_quantity" placeholder="Requested Quantity" />
//                                         </div>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                             <div className="row mt-4">
//                                 <div className="col-sm-12">
//                                     <Form.Group controlId="requested_quantity" style={{ display: "inline-flex", width: "100%" }}>
//                                         <div className="col-sm-12 text-center">
//                                             <Form.Label style={{ color: this.props.status ? "green" : "red" }}>{this.props.message}</Form.Label>
//                                         </div>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                         </Modal.Body>
//                     <Modal.Footer>
//                     <Button variant="primary" onClick={() => this.props.resourceBooking(this.props.resource)}>
//                         Book
//                     </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         loading: state.booking.loading,
//         message: state.booking.message,
//         status: state.booking.success,
//     };
// };

// export default connect(mapStateToProps, {
//     resourceBooking,
// })(withRouter(ModalComponent));