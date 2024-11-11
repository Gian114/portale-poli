import React from 'react';

import { Button, Container, Form } from 'react-bootstrap';

export default function Elaborati() {
  return (
    <>
      <Container className="custom-container m-0 d-flex flex-column align-items-center justify-content-center">
        <div className="text-start my-3">
          <h6 className="text-style" style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--text)' }}>
            Tramite questo strumento è possibile consegnare file da parte degli studenti ai docenti del corso in
            oggetto. Una volta caricato, il file sarà visibile solo al docente ed allo studente che ha eseguito il
            caricamento e non sarà possibile eliminarlo, ma solo richiedere la cancellazione dei propri elaborati al
            docente.
          </h6>
        </div>
        <Container
          className="custom-container d-flex flex-column align-items-center justify-content-center"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <Form.Label htmlFor="inputPassword5" className="text-style mt-2" style={{ color: 'var(--text)' }}>
            Descrizione elaborato:
          </Form.Label>
          <Form.Control
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="mb-2"
            style={{ width: '50%', color: 'var(--text)', backgroundColor: 'var(--surface)' }}
          />
          <Form.Label
            htmlFor="inputPassword5"
            className="text-style"
            style={{ color: 'var(--text)', backgroundColor: 'var(--background)' }}
          >
            File:
          </Form.Label>
          <Form.Control
            type="file"
            name="file"
            style={{ width: '50%', color: 'var(--text)', backgroundColor: 'var(--surface)' }}
            className="mb-2"
          />
          <Button className="custom-button mb-2">Carica</Button>
        </Container>
      </Container>
    </>
  );
}
