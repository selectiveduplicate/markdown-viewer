import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Heading = () => {
    return (
      <Container fluid>
        <Row className="text-center mt-4">
          <Col>
            <h1 className="font-weight-bold text-primary">
              Markdown Previewer
            </h1>
          </Col>
        </Row>
      </Container>
    )
};

export default Heading;