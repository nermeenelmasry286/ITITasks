import React from 'react';
import { Products } from '../components/Products';

export const ProductSection = () => {
    return (
        <section className='product-section' style={{ margin: '40px 0' }}>
            <Products />
        </section>
    );
}
