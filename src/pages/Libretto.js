import { useState } from 'react';
import data from '../data';
import { Container, ProgressBar } from 'react-bootstrap';
import { Row, Col, Table } from 'react-bootstrap';

let theadStyle = {
    backgroundColor: '#03577A',
    color: '#FFF'
}

export default function Libretto() {
 

    const [courses, setCourses] = useState(data.valutazioni);

    return (
        <>
            <Container className='mt-5'>
                <Row className='w-25'>
                    <Col>
                        <ProgressBar
                            variant='info'
                            now={courses.reduce((acc, course) => acc + course.cfu, 0)}
                            max={120}
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                    </Col>
                    <Col>
                        <h5 style={{ paddingTop: '15px' }}>Crediti ottenuti...</h5>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                    <h4 className='pb-3' style={{color: '#FF9248', fontFamily: 'Helvetica'}}>Valutazioni</h4>
                    <Table striped>
                        <thead>
                            <tr>
                                <th style={theadStyle}>Codice</th>
                                <th style={theadStyle}>Nome</th>
                                <th style={theadStyle}>Anno</th>
                                <th style={theadStyle}>Crediti</th>
                                <th style={theadStyle}>Voto</th>
                                <th style={theadStyle}>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(course => (
                                <tr key={course.codice}>
                                    <td>{course.codice}</td>
                                    <td>{course.nome}</td>
                                    <td>{course.anno}</td>
                                    <td>{course.cfu}</td>
                                    <td>{course.voto}</td>
                                    <td>{course.data}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}