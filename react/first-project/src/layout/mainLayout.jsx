import React from 'react';
import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import {Products} from '../components/Products';
import { Footer } from '../components/Footer';

export const MainLayout = () => (
    <>
        <main>
            <Header />
            <Slider />
            
                
           <Products />
            
            <Footer />
        </main>
    </>
);
