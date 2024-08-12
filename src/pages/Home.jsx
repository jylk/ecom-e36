import { Col, Container, Row} from "react-bootstrap";
import HomeBanner from "../components/HomeBanner";
import { useEffect, useState } from "react";

import SingleProduct from "../components/SingleProduct";

function Home(){
      const [products, setProducts] = useState([]);

      useEffect(()=>{
                 fetch("./products.json")
                 .then((data) => data.json())
                 .then((res) => setProducts(res.products));
  
      },[]);
        console.log("Products..............>" ,products);
    
    return(
        
        <>
        <HomeBanner/>
        <Container>
            <Row>
                <Col className="my-3">  
                   <h2>
                    Latest Products
                   </h2>
                </Col>
            </Row>
            <Row>
                  
            {products.map((product)=>(
                       <SingleProduct product = {product}/>
                  ))}
                
            </Row>
        </Container>
        </>
        
    )

}
export default Home