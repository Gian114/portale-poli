import React, { useContext } from 'react';
import { AvvisiContext } from '../App';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Searchbar from './Searchbar';
import Dropdown from 'react-bootstrap/Dropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


import Services from '../data/Data.json';
import Logo from '../assets/logo_polito.svg';
import Logo2 from '../assets/logo_polito_reduced.svg'
import '../styles/Utilities.css'

import { Link } from 'react-router-dom';
import { Bell, Envelope, PersonCircle, BellFill } from 'react-bootstrap-icons';


export default function PoliNavbar() {

    const { avvisi, setAvvisi } = useContext(AvvisiContext);

    const handleNotificationClick = (notifica) => {
        const updatedAvvisi = avvisi[0].filter((n) => n !== notifica);
        setAvvisi([updatedAvvisi]);
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Ultime notifiche</Popover.Header>
            <Popover.Body>
                {avvisi[0].map((notifica) => (
                    <div key={notifica.id} 
                    onClick={() => handleNotificationClick(notifica)}
                    className='mb-2'>
                        <h6 className='text-style' style={{fontSize: '13px'}}>{notifica.title}</h6>
                        <span className='click-notifica'>{notifica.body}</span>
                    </div>
                ))}
            </Popover.Body>
        </Popover>
    );

    return (
        <Navbar className="custom-navbar">
            <Container fluid>
                <Navbar.Brand className="d-none d-lg-block" as={Link} target='_blank' to="https://www.polito.it/" style={{ width: 'auto', minWidth: '166.3px', height: '57px', marginLeft: '-3px', marginRight: '36px' }}>
                    <Image
                        src={Logo}
                        alt="Logo PoliTo"
                        style={{ width: '100%', height: '100%' }}
                    />
                </Navbar.Brand>
                <Navbar.Brand className="d-block d-lg-none" as={Link} target='_blank' to="https://www.polito.it/" style={{ width: 'auto', height: '57px', marginLeft: '-3px', marginRight: '12px' }}>
                    <Image
                        src={Logo2}
                        alt="Logo PoliTo"
                        style={{ width: '51.44px', height: '100%' }}
                    />
                </Navbar.Brand>
                <Navbar.Brand className="d-none d-lg-block">
                    <span
                        style={{
                            color: '#002B49',
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: '600',
                            display: 'inline-block',
                            fontSize: '22px',
                        }}
                    >
                        Portale della didattica
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                    <Searchbar services={Services} />
                    <Nav
                        className="my-0 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="https://mail.studenti.polito.it/?_task=mail&_mbox=INBOX" target='_blank' style={{ marginRight: '5px', marginTop: '9px' }}><Envelope size={28} color='#002B49' /></Nav.Link>
                        <Nav.Link as={Link} to="/" style={{ marginRight: '12px', marginTop: '9px' }}>
                            {avvisi[0].length === 0 ? <Bell size={28} color='#002B49' /> :
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    <BellFill size={28} color='#002B49' />
                                </OverlayTrigger>
                            }
                        </Nav.Link>
                        <Navbar.Text className="text-style" style={{ fontWeight: '500', fontSize: '16px', color: '#002B49', marginRight: '12px' }}>
                            <div className='d-none d-md-block'>
                                s123456
                                <br />
                                <span className='truncated'>Mario Rossi</span>
                            </div>
                        </Navbar.Text>
                        <Navbar.Brand>
                            <Dropdown>
                                <Dropdown.Toggle id='dropdown-icon'
                                    bsPrefix='e-caret-hide'
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        boxShadow: 'none',
                                    }}>
                                    <PersonCircle size={48} color='#002B49' />
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ right: 'auto', left: '-120px', fontFamily: 'Montserrat, sans-serif', }}>
                                    <Dropdown.Item style={{ fontWeight: '500' }}>Dati utente</Dropdown.Item>
                                    <Dropdown.Item style={{ fontWeight: '500' }}>Logout</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}