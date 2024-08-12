import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const AddProduct = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      setValidated(true);
    }else{
      console.log("Form submitted", form)
      setValidated(true);
    }

    
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='text-center'>
            Add Product
          </h2>
        </Col>
      </Row>
      <Row className='justify-content-center'>
      
        <Col md ={4} className='mb-3 shadow p-4'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom01">
                <Form.Label>Product name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product name"
                  name='product name' />
                <Form.Control.Feedback type='invalid'>Please enter a product name</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Product category"
                  name='category'
                />
                <Form.Control.Feedback type='invalid'>Please enter a product category</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Price:</Form.Label>


                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  name='price'
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a price.
                </Form.Control.Feedback>

              </Form.Group>
              <Button className='mt-3'type="submit">Add Product</Button>
            </Row>
          </Form>
        </Col>
      
      </Row>
      
    </Container>
  )
}

export default AddProduct