import React from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import { StarFill, Lightning, Tools, Shield, LightbulbFill, Wrench } from 'react-bootstrap-icons'
import './home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Carousel */}
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/1600x600"
            alt="Electrical Services"
          />
          <Carousel.Caption>
            <h1>Professional Electrical Services</h1>
            <p>Licensed & Insured Master Electrician</p>
            <Button variant="primary" size="lg" className="me-3">Schedule Service</Button>
            <Button variant="outline-light" size="lg">Emergency Call</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Services Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4 text-primary">Our Services</h2>
        <Row>
          {[
            { icon: <Lightning size={40} />, title: 'Electrical Repairs' },
            { icon: <Tools size={40} />, title: 'Installation' },
            { icon: <LightbulbFill size={40} />, title: 'Lighting' },
            { icon: <Shield size={40} />, title: 'Safety Inspections' },
            { icon: <Wrench size={40} />, title: 'Panel Upgrades' },
          ].map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="text-center h-100 service-card">
                <Card.Body>
                  <div className="service-icon mb-3">
                    {service.icon}
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    Professional {service.title.toLowerCase()} services for your home or business
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Booking Section */}
      <div className="booking-section py-5">
        <Container>
          <h2 className="text-center mb-4 text-primary">Book Our Services</h2>
          <Row className="justify-content-center">
            <Col md={5} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <img 
                    src="https://placehold.co/100x100" 
                    alt="Nextdoor" 
                    className="mb-3"
                  />
                  <Card.Title className="text-primary">Book on Nextdoor</Card.Title>
                  <Card.Text>
                    Check our reviews and book directly through Nextdoor
                  </Card.Text>
                  <Button variant="primary">Visit Nextdoor Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <img 
                    src="https://placehold.co/100x100" 
                    alt="Direct Contact" 
                    className="mb-3"
                  />
                  <Card.Title className="text-primary">Direct Booking</Card.Title>
                  <Card.Text>
                    Contact us directly for immediate assistance
                  </Card.Text>
                  <Button variant="primary">Contact Us</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Reviews Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4 text-primary">Customer Reviews</h2>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 review-card">
                <Card.Body>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarFill key={i} className="text-warning" />
                    ))}
                  </div>
                  <Card.Text>
                    "Excellent service! Very professional and completed the work quickly and efficiently."
                  </Card.Text>
                  <footer className="blockquote-footer mt-2">
                    Happy Customer {index}
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home