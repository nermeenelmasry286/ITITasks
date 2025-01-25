import React, { useState } from 'react'; 
import { Card, Button } from 'react-bootstrap'; 
 
export const Product = ({ product }) => { 
  const [showMore, setShowMore] = useState(false);  
 
  const maxLength = 30;
  const maxxLength = 40; 
 
  return ( 
    <Card className="mx-auto" style={{ width: '18rem' }}> 
      <div className="mt-3 text-center">

      <Card.Img 
        variant="top" 
        src={product.image} 
        alt={product.title} 
        style={{ width: '100px', height: '150px', margin:'auto' }} 
      /> 
      </div>
      
      <Card.Body> 
        <Card.Title>{product.title}</Card.Title> 
        <Card.Text>{product.price} $</Card.Text> 
 
      
        <Card.Text> 
          {showMore 
            ? product.description.slice(0, maxxLength) 
            : `${product.description.slice(0, maxLength)}...`} 
          <Button 
            variant="link" 
            onClick={() => setShowMore(!showMore)}  
            style={{ padding: 0, marginLeft: '5px' }} 
          > 
            {showMore ? 'Show Less' : 'Show More'} 
          </Button> 
        </Card.Text> 
 
        <Button>Buy NOW</Button> 
      </Card.Body> 
    </Card> 
  ); 
};