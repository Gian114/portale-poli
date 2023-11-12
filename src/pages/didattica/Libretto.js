import { useState } from 'react';
import valutazioni from '../../data/data';

import { Container, ProgressBar } from 'react-bootstrap';
import { Row, Col, Table } from 'react-bootstrap';

import { JournalCheck } from 'react-bootstrap-icons';

import '../../styles/App.css';

let theadStyle = {
    backgroundColor: '#002B49',
    color: '#FFF'
}

export default function Libretto() {

    return (
        <>
            <Container className='my-3'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <JournalCheck size={25} className='me-2' />
                    <h1 className='text-style'>Libretto</h1>
                </div>
                <h4 className='pb-2' style={{ color: '#B75E00', fontFamily: 'Helvetica'}}>La tua carriera</h4>
                <Row className='mt-4'>
                    <Col>
                        <ProgressBar
                            variant='primary'
                            now={valutazioni.reduce((acc, course) => acc + course.cfu, 0)}
                            max={120}
                            striped
                            style={{ backgroundColor: '#004C81'}}
                        />
                         <h5 style={{ paddingTop: '15px' }} className='text-style'>Media ponderata: 27.7</h5>
                         <h5 className='text-style'>Voto Laurea: 101.56</h5>
                    </Col>
                    <Col>
                        <ProgressBar
                            variant='primary'
                            now={valutazioni.reduce((acc, course) => acc + course.cfu, 0)}
                            max={120}
                            label={`${valutazioni.reduce((acc, course) => acc + course.cfu, 0)}%`}
                            style={{ backgroundColor: '#004C81'}}
                        />
                        <h5 style={{ paddingTop: '15px' }} className='text-style'>Crediti ottenuti: {valutazioni.reduce((acc, course) => acc + course.cfu, 0)}</h5>
                        <h5 className='text-style'>Crediti Frequentati: 120</h5>
                    </Col>
                    <Col>
                        <ProgressBar
                            variant='primary'
                            now={21}
                            max={120}
                            label={`21%`}
                            style={{ backgroundColor: '#004C81'}}
                        />
                        <h5 style={{ paddingTop: '15px' }} className='text-style'>Crediti ottenuti quest'anno: 6</h5>
                        <h5 className='text-style'>Crediti Frequentati quest'anno: 28</h5>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        <h4 className='pb-3 text-style' style={{ color: '#B75E00'}}>Valutazioni</h4>
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
                                {valutazioni.map(course => (
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