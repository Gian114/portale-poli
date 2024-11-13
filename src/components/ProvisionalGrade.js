import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ProvisionalGrade(props) {
  return (
    <ListGroup.Item className="summary">
      <Container className="p-0">
        <Row>
          <Col xs={2} className="course-detail p-0 me-3" style={{ marginLeft: '8px' }}>
            {props.codice}
          </Col>
          <Col xs={4} className="course-detail truncated p-0">
            {props.nome}
          </Col>
          <Col xs={1} className="detail p-0">
            {props.anno}
          </Col>
          <Col xs={1} className="detail p-0" style={{ position: 'relative', left: 12 }}>
            {props.cfu}
          </Col>
          <Col xs={1} className="course-detail p-0" style={{ position: 'relative', left: 24 }}>
            {props.esito}
          </Col>
          <Col xs={1} className="detail p-0" style={{ position: 'relative', left: 12 }}>
            {props.data}
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

ProvisionalGrade.propTypes = {
  codice: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  anno: PropTypes.string.isRequired,
  cfu: PropTypes.string.isRequired,
  esito: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
