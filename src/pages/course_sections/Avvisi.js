import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import Avvisi_GC from '../../data/Avvisi_GC.json';

export default function Avvisi() {
  const location = useLocation();
  const nome = location.state.nome;

  const avvisi = Avvisi_GC;

  return (
    <>
      <Container className="custom-container m-0">
        <div className="subsection">
          {avvisi
            .filter(avviso => avviso.course === nome)
            .map(avviso => (
              <div key={avviso.id} className="avviso">
                <div>
                  <span className="text-style" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                    {avviso.data}
                  </span>
                  <span style={{ fontWeight: 'var(--font-weight-semibold)' }}>{' - '}</span>
                  <span className="text-style" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                    {nome}
                  </span>
                </div>
                <div>
                  <span className="text-style" style={{ fontWeight: 'var(--font-weight-semibold)' }}>
                    {avviso.sender}
                  </span>
                </div>
                <div>
                  <span className="text-style">{avviso.body}</span>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}
