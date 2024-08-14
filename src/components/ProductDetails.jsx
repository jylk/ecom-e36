import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const { id } = useParams();

    console.log("Id-------------", id);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const[productFetched, setProductFetched] = useState(false);
    const getProducts =() =>{
        fetch("./products.json")
            .then((data) => data.json())
            .then((res) => setProducts(res.products));
            setProductFetched(true);

    }
    useEffect(() => {

        if(!productFetched)
        {
            getProducts();
        }
        

        if (products.length > 0) {
            const res = products.find((product) => product.id === Number(id));
            setProduct(res);
        }
    }, [id, products]);


    console.log("products................", products)




    return (
        <Container>
            {product && (<Row className='my-4'>
                <Col md={4}>
                    <img src = {product.image} alt={product.name} className='w-100'/>
                </Col>
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3><b>Name:</b> {product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4><b>Price:</b>{product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5><b>Description:</b>{product.description}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5><b>Category:</b>{product.category}</h5>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>)}
            
        </Container>
    )
}
  


export default ProductDetails



