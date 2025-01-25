import React, { useState, useEffect } from 'react'; 
import { Row } from 'react-bootstrap'; 
import styles from "../css/ProductCards.module.css"; 
import { Product } from './Product'; 

export function Products() {
  

  const [products,setProducts]= useState([])
  const [errors,setErrors]= useState(null)
  const [isLoading,setIsLoading]= useState(true)
  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true)

      try{

        let response = await fetch("https://fakestoreapi.com/products");
      setProducts(await response.json())
      setIsLoading(false)
      setErrors(null)
      } catch (error){

        setIsLoading(false)
        setErrors(error)
      } 
      
      
    
    };

    fetchAllData();  
  }, []);  

  return (
    <div className="products-container" style={{ margin: '40px 0' }}>
      <h2 className="text-center mt-3 mb-3">Our Products</h2>
      <Row className={`container g-4 mx-auto ${styles.products}`}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Row>
    </div>
  );
}