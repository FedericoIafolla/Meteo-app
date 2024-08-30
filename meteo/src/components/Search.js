// src/components/Search.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city) {
            onSearch(city);
            setCity('');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group controlId="formSearch">
                <Form.Control
                    type="text"
                    placeholder="Inserisci nome città"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                Cerca
            </Button>
        </Form>
    );
};

export default Search;
