import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa'; // Importa l'icona di ricerca
import Weather from '../components/Weather';  // Assicurati che il percorso sia corretto

// Mappa dei nomi delle città in italiano
const cityNames = {
    Rome: "Roma",
    Tokyo: "Tokyo",
    "New York": "New York",
    Paris: "Parigi",
    London: "Londra",
    Sydney: "Sydney"
};

const Home = ({ weatherData, onSearch }) => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const handleSearch = () => {
        if (searchCity) {
            onSearch(searchCity);
            setSelectedCity(searchCity);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Container fluid className="d-flex flex-column min-vh-100">
            <Row className="flex-grow-1">
                <Col
                    md={3}
                    className="d-flex flex-column"
                    style={{
                        borderRight: '1px solid #ddd',
                        padding: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)' // Trasparente per vedere lo sfondo
                    }}
                >
                    <h3 style={{ marginBottom: '20px' }}>Seleziona una città</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Form.Control
                            type="text"
                            value={searchCity}
                            onChange={(e) => setSearchCity(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Cerca una città"
                            style={{
                                marginRight: '10px',
                                borderRadius: '20px',
                                flex: 1
                            }}
                        />
                        <Button
                            onClick={handleSearch}
                            variant="primary"
                            style={{
                                borderRadius: '50%',
                                padding: '10px',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <FaSearch color="white" />
                        </Button>
                    </div>
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                        {Object.keys(weatherData).map(city => (
                            <li key={city} style={{ marginBottom: '10px' }}>
                                <Button
                                    variant="outline-primary"
                                    style={{ width: '100%', borderRadius: '20px' }}
                                    onClick={() => setSelectedCity(city)}
                                >
                                    {cityNames[city] || city}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col
                    md={9}
                    className="d-flex flex-column"
                    style={{
                        padding: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)' // Trasparente per vedere lo sfondo
                    }}
                >
                    {selectedCity ? (
                        <Weather weatherData={weatherData[selectedCity]} />
                    ) : (
                        <p>Seleziona una città per vedere i dettagli.</p>
                    )}
                </Col>
            </Row>
            <footer
                style={{
                    backgroundColor: '#212529', // Colore dello stesso header
                    color: 'white',
                    textAlign: 'center',
                    padding: '10px',
                    width: '100%',
                    position: 'fixed',
                    bottom: '0',
                    left: '0'
                }}
            >
                <p>&copy; 2024 MeteoApp. Tutti i diritti riservati.</p>
            </footer>
        </Container>
    );
};

export default Home;
