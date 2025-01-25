import React, { useState } from 'react';
import { Row, ButtonGroup, Button } from 'react-bootstrap';
import styles from "../css/ProductCards.module.css";
import { Product } from './Product';
import { useFetch } from '../CustomHooks/useFetch';

export function Category() {

  const { data: products, isLoading, errors } = useFetch("https://fakestoreapi.com/products");

  
  const [activeCategory, setActiveCategory] = useState("All");

  
  const categories = ["All", ...new Set((products || []).map((product) => product.category))];


  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="category-container" style={{  width:'90%', margin:'auto', padding:'20px' }}>
      <h2 className="text-center mt-3 mb-3">Product</h2>

      
      <ButtonGroup className="mb-4 d-flex justify-content-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "primary" : "outline-primary"}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} 
          </Button>
        ))}
      </ButtonGroup>

      <Row className={`container g-4 mx-auto ${styles.products}`}>
        {filteredProducts.map((product) => (
        <Product product={product} key={product.id} />
        ))}
      </Row>
    </div>
  );
}