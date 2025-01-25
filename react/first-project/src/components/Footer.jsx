import React from 'react';
import { Container } from 'react-bootstrap';

export const Footer = () => (
    <footer className="bg-dark text-white text-center py-3">
        <Container>
            <p>&copy; 2025 Nermeen. All Rights Reserved.</p>
            <p>
                <a href="#privacy" className="text-white">Privacy Policy</a> | 
                <a href="#terms" className="text-white"> Terms of Service</a>
            </p>
        </Container>
    </footer>
);
