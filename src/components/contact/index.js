import React, {useState} from "react";
import {Form, FormControl, Button, Card} from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Row, Col} from 'react-bootstrap';

import { validateEmail } from "../../utils/helpers";

function ContactForm () {
    const [formState, setFormState]=useState({name:'', email:'', message:''});
    const [errorMessage, setErrorMessage]=useState('');
    const {name, email, message}=formState;

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submit Form', formState);

        if(formState.name==="") {
            toast.error("Please enter your name",);
        } else if(!validateEmail(formState.email)) {
            toast.error("Please enter a valid email address");
        } else if(formState.message==="") {
            toast.error("Please enter a message to be sent");
        } else {
            toast.success("Message Sent! Thank you for reaching out!");
        }
    };

    const handleChange=(e)=>{
        if(e.target.name==='email'){
            const isValid=validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('The email address entered is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState,[e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
        setFormState({...formState,[e.target.name]: e.target.value});
    }

    return (
        <Row className="justify-content-md-center mb-5 mt-5">
            <ToastContainer
            position="top-center"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <Col md={5}>
        <Card className="mt-5 bg-dark text-white" body>
          <Card.Title className="mb-3">Contact Me</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" name="name" defaultValue={name} onChange={handleChange} />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={email} onChange={handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <FormControl as="textarea" name="message" defaultValue={message} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
        </Col>
          </Row>
      );
}

export default ContactForm;