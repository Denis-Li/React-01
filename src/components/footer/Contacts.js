import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';


class Contacts extends React.Component {
    render(){
        return(
            <>
                <Container>
                    <h1>Contact us</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Ваш e-mail"/>
                            <Form.Text>
                                We'll never share your email with anyone else
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" >Отправить</Button>
                    </Form>
                </Container>
            </>
        )
    }
}

export default Contacts;