import React, { useEffect, useState } from 'react';

import { ArrowRightShort } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import axios from 'axios';

import LoadingModal from '../../components/LoadingModal';
import ThesisProposals from '../../components/ThesisProposals';

const researchGroups = [
  'DAUIN - GR-03 - COMPUTER NETWORKS GROUP - NETGROUP',
  'DAUIN - GR-16 - SOFTWARE ENGINEERING GROUP - SOFTENG',
  'GR-16 - SOFTWARE ENGINEERING GROUP - SOFTENG',
  /*
  '03-Aerotermodinamica, Magnetofluidodinamica e dinamica dei plasmi',
  '04-Automazione e Robotica',
  '05-Bioingegneria Industriale',
  '06-Dinamica dei Sistemi Meccanici e Identificazione',
  '08- Dinamica, controllo e simulazione del volo',
  '10- Fluidodinamica',
  '11 - LAQ AerMec per componenti di turbine e compressori',
  '12-Meccanica dei materiali e delle giunzioni: modelli, fatica, impatto e prove',
  '13-Meccanica del veicolo',
  '14-Meccatronica e servosistemi',
  '15-Modellazione, simulazione e controllo di velivoli',
  '16-ASTRA: Additive manufacturing for Systems and sTRuctures in Aerospace',
  '17 - Progettazione di macchine rotanti e sistemi meccatronici',
  '18-Progettazione e sperimentazione di organi di trasmissione',
  '19- Progettazione e sperimentazione di sistemi e veicoli ferroviari ed industria',
  '20- ISED: Industrial Systems Engineering and Design',
  '21-Progetto di velivoli e strutture aerospaziali in materiale composito',
  '22-Progetto e sviluppo di sistemi e tecnologie aerospaziali',
  '23-Propulsione aerospaziale',
  '25-Struttura e sicurezza dei veicoli: progettazione,simulazione,ottimizzazione',
  '26- MUL2',
  '27- Veicoli innovativi elettrici e ibridi',
  '28- biomedica',
  '29- SMART STRUCTURES AND SYSTEMS',
  '3D LAB',
  '3d Lab',
  'AA - ALL-Polymer',
  'AA - Additive Manufacturing',
  'AA - Addtive manufact',
  'AA - CO2 reduction for a low-carbon economy',
  'AA - Crystal Engineering',
  'AA - Elettrochemistry',
  'AA - Glasses, Ceramics and Composites',
  'AA - LaTEST Laboratory for Theoretical and Experimental Superconducting Tunnel',
  'AA - MOLE (Molecular Engineering Lab)',
  'AA - Materials and Processes for Micro and Nano Technologies',
  'AA - Materials-environment interaction',
  'AA - Metallurgical Engineering',
  'AA - Multiscale modelling for materials science and process engineering',
  'AA - Nanophysics and Quantum Systems',
  'AA - Photonic',
  'AA - Polymeric Materials',
  'AA - Quantum phases and dynamics of bosonic lattice systems',
  'AA - Safer',
  'AA - Statistical Physics and Interdisciplinary Applications',
  'AA - Surf-CheM',
  'AA - TEST-SQUAD',
  'Advanced AMS and Power ICs',
  'Aerosol technology',
  'Analisi non lineare e calcolo delle variazioni',
  'Analog Devices - AMS Group (Polito)',
  'Applied Electromagnetics',
  'ArtIStE Artificial Intelligence In Structural Eng http://www.civilml.polito.it/',
  'Artificial and Mechanical Intelligence (AMI) Lab, IIT',
  'Artiste',
  'Automatica',
  'Automatica group - DET',
  'BAEDA lab (www.baeda.polito.it)',
  'Biolab: Ingegneria Biomedica',
  'Building Civic Identities -',
  'CADEMA',
  'CENTRO INTERDIPARTIMENTALE SISCON "Safety of Infrastructures and Constructions"',
  'CNR-IEIIT, comunicazioni industriali',
  'COMPUTER NETWORKS GROUP - NETGROUP',
  'CREST, Dipartimento di Scienza Applicata e Tecnologia (DISAT), Politecnico di To',
  'Carbon Group',
  'Centre of Autonomous and Cyber-Physical Systems, Cranfield University, UK',
  'Centro Interdipartimentale CARS',
  'Computational Methods in Civil Engineering, University of Aarhus (DK)',
  'Construction History CHG',
  "Costruire l'identità civica",
  'Crittografia e teoria dei numeri',
  'Crystallization and Crystal Engineering',
  'DATABASE AND DATA MINING GROUP - DBDM',
  'DAUIN - AEROSPACE AND SAFETY COMPUTING LAB',
  'DAUIN - GR-02 - COMPUTER GRAPHIC AND VISION GROUP - CGVG',
  'DAUIN - GR-03 - COMPUTER NETWORKS GROUP - NETGROUP',
  'DAUIN - GR-04 - DATABASE AND DATA MINING GROUP - DBDM',
  'DAUIN - GR-04 - DATABASE AND DATA MINING GROUP - DBDMG',
  'DAUIN - GR-05 - Aerospace and Safety Computing Lab',
  'DAUIN - GR-05 - ELECTRONIC CAD & RELIABILITY GROUP - CAD',
  'DAUIN - GR-05 - ELECTRONIC CAD & RELIABILITY GROUP - CAD',
  'DAUIN - GR-05 - ELECTRONIC CAD and RELIABILITY GROUP - CAD',
  'DAUIN - GR-06 - ELECTRONIC DESIGN AUTOMATION - EDA',
  'DAUIN - GR-09 - GRAphics and INtelligent Systems - GRAINS',
  'DAUIN - GR-10 - Intelligent and Interactive Systems - ELITE',
  'DAUIN - GR-11 - INTERNET MEDIA GROUP - IMG',
  'DAUIN - GR-13 - METODI FORMALI - FM',
  'DAUIN - GR-16 - SOFTWARE ENGINEERING GROUP - SOFTENG',
  'DAUIN - GR-19 - SYSTEM BIOLOGY GROUP - SYSBIO',
  'DAUIN - GR-22 - Nexa Center for Internet & Society - NEXA',
  'DAUIN - GR-23 - VANDAL - Visual and Multimodal Applied Learning Lab',
  'DAUIN - GR-24 - SMILIES - reSilient coMputer archItectures and LIfE Sci',
  'DAUIN - GR-24 - reSilient coMputer archItectures and LIfE Sci - SMILIES',
  'DIATI, geomatica',
  'DITIC - Idraulica',
  'Dinamica del veicolo',
  'DrawingTOtheFuture',
  'DrawingTOtheFuture e vr@polito',
  'EDA Group',
  'ELECTRONIC DESIGN AUTOMATION - EDA',
  'ELectrcal ENergy (ELEN)',
  'ELectrical ENergy (ELEN)',
  'EMC Group (Electromagnetic Compatibility)',
  'ESSENTIAL',
  'ETD',
  'Earthquake Engineering & Dynamics lab',
  'Earthquake Engineering & Dynamics lab',
  'Electrochemistry Group @PoliTO',
  'Electrochemistry Group @polito',
  'Electronic Design Automation(EDA)',
  'Energy Center Lab',
  'Etd',
  'FPRL - Fluid Power Research Laboratory',
  'Fabbricazione Additiva',
  'Fiber and Laser Technologies Group',
  'Flow Control',
  'GEOMATICA PER I BENI CULTURALI',
  'GLANCE',
  'GR-03 - COMPUTER NETWORKS GROUP - NETGROUP',
  'GR-06 - ELECTRONIC DESIGN AUTOMATION - EDA',
  'GR-09 - GRAphics and INtelligent Systems - GRAINS',
  'GR-11 - INTERNET MEDIA GROUP - IMG',
  'GR-16 - SOFTWARE ENGINEERING GROUP - SOFTENG',
  'GRAphics and INtelligent Systems - GRAINS',
  'GRUPPO ARISK',
  'GRUPPO FORZE - ISTITUTO NAZIONALE DI RICERCA METROLOGICA (INRiM)',
  'GUSEE',
  'Gamma Team',
  'Geofisica Applicata',
  'Geomatics Lab',
  'Geophysics',
  'Gestione della conoscenza nello sviluppo prodotto/processo',
  'Gruppo di ricerca DIST - revisione PRG sezione storica',
  'Humanoid Sensing and Perception (HSP) Group, Istituto Italiano di Tecnologia',
  'ICT4SS - ICT FOR SMART SOCIETIES',
  'ICTA @UPV (https://icta.webs.upv.es/en/)',
  'IDROLOGIA',
  'IEIIT/CNR COMPUTER ENGINEERING AND NETWORKS GROUP',
  'INTERNET MEDIA GROUP - IMG',
  'Image Processing Lab (IPL)',
  'Industria 4.0',
  'Ingegneria degli acquiferi / Groundwater engineering',
  'Ingegneria della qualità',
  'J - Tech Politecnico di Torino',
  'LABG4CH',
  'Laboratory for Engineering of the Neuromuscular System (LISiN)',
  'Linear and Nonlinear Circuits & Systems Group (LiNCS)',
  'Low frequency measurement group',
  'M3ES',
  'MAHTEP',
  'MORE Lab _ http://www.morenergylab.polito.it',
  'MOREnergy Lab',
  'MPMNT - MATERIALS AND PROCESSES FOR MICRO & NANO TECHNOLOGIES',
  'Marie Sk³odowska-Curie ITN XP-Resilience team',
  'Masonry Research Group of University of Leeds',
  'Materials - Enviroment Interaction',
  'Materials and Processes for Micro and Nano Technologies',
  'Mathematical Biology and Physiology',
  'Meccanica dei fluidi ed idraulica ambientale',
  'Meccanica dei materiali e delle giunzioni: modelli, fatica, impatto e prove',
  'Meccanica del Veicolo',
  'Meccatronica e servosistemi',
  'Metodi e modelli matematici per sistemi complessi',
  'MiNES (Micro&Nano Electronic Systems)',
  'Microelectronics',
  'Microwaves and Optoelectronics Group',
  'Misure',
  'Modelli e metodi della Fisica Matematica',
  'MuSyChEn - Multiphase Systems and Chemical Engineering',
  'Multi-Scale Modeling Laboratory – SMaLL (www.polito.it/small)',
  'NETGROUP',
  'Navigation Signal Analysis and Simulation group (NavSAS)',
  'Nemo',
  'Neuronics (Artificial Neural Networks)',
  'Optical Communication group (OPTCOM)',
  'Ottimizzazione e ricerca operativa',
  'PACOME (Palais communaux en Méditerranée) financé par la FR AGORANTIC',
  'PEEMD',
  'PEIC - Power Electronics Innovation Center, www.peic.polito.it',
  'PEIC - Power Electronics Innovation center',
  'PORTHOS-Plasmonics & Raman Towards enHanced Optical Spectroscopy',
  'PRIN Bando 2022 Prot. 20223NMEP4',
  'PRIN Building Civic Identities. Towards an Atlas of Communal Palaces in Italian',
  'PT-ERC',
  'Pianificazione e politiche urbane e territoriali',
  'Power System Group',
  "Probabilita' e applicazioni",
  "Probabilita', statistica e ottimizzazione",
  'Prof. Fabrizio Pirri',
  'Progettazione di macchine rotanti e sistemi meccatronici',
  'Progetto Cistercian Cultural Heritage (CCH) referente scient. Silvia Beltramo',
  'Quality Engineering and Management Group',
  'Quantum Metrology and Nanotechnologies at INRiM',
  'ROBERTA INGARAMO, RICCARDO POLLO, ELENA FREGONARA. SEMINARIO DI TESI',
  'Raw Material Engineering',
  'Resilience lab',
  'Resilience laboratory DRSIL - DISEG',
  'Responsible Risk Resilience interdepartmental Centre (R3C) www.r3c.polito.it',
  'SOLAR',
  'Sensing and processing',
  'Sistemi di accumulo energia innovativi',
  'SmartData@PoliTO',
  'Social Innovation Monitor',
  'Statistica biologia e industria',
  'Struttura e sicurezza dei veicoli: progettazione, simulazione, ottimizzazione e',
  'TEBE',
  'TEBE (http://www.tebe.polito.it/)',
  'TESIN',
  'TESIN - NEMO',
  'THEXOR - DIMEAS',
  'TNG',
  'Telecommunication Networks Group',
  'Telerilevamento di nubi e precipitazioni',
  'Time and frequency reference standards',
  'Transitional Morphologies',
  'Transport Research for Innovation and Sustainability (TRIS)',
  'Trasporti',
  'Traspporti',
  'VALIUM (http://www.valium.polito.it/)',
  'VLSI THEORY, DESIGN AND APPLICATIONS (VLSILAB)',
  'VLSILAB (VLSI theory, design and applications)',
  'VR@Polito',
  'X-OLD - AUTOMATION LOGISTICS AND COMBINATORIAL OPTIMIZATION - ALCO',
  'gruppo di elettrochimica',
  'http://grains.polito.it/',
  'https://areeweb.polito.it/drsil/',
  'https://peer.berkeley.edu/',
  'https://staff.polito.it/gianpaolo.cimellaro/index.html',
  'https://www.eucentre.it/fondazione-eucentre-pavia/filiatrault-andre/',
  'iisbe Italia',
  'ingegneria sanitaria ambientale',
  'laboratorio di dinamica e sismica',
  'microelettronica',
  'steps-denerg',
  'www.reslog.polito.it',
  'www.rockmech.polito.it',
  */
];

export default function ProposteDiTesi() {
  const { i18n } = useTranslation();
  const [thesisProposals, setThesisProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThesisProposals = async () => {
      setLoading(true);
      const lang = i18n.language;
      try {
        const thesisProposalsArray = await Promise.all(
          researchGroups.map(async grp => {
            const response = await axios.get(`http://localhost:5000/api/thesisProposals`, {
              params: { grp, lang },
            });
            return response.data;
          }),
        );
        const allThesisProposals = thesisProposalsArray.flat();
        setThesisProposals(allThesisProposals);
      } catch (error) {
        console.error('Error fetching thesis proposals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchThesisProposals();
  }, [i18n.language]);

  return (
    <>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : (
        <>
          <MyBreadcrumb />
          <ThesisProposals thesisProposals={thesisProposals} />
        </>
      )}
    </>
  );
}

function MyBreadcrumb() {
  const { t } = useTranslation();

  return (
    <div className="d-flex mt-2">
      <Link to="/" className="breadcrumb-link">
        Homepage
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <Link to="/carriera" className="breadcrumb-link">
        {t('sidebar.carriera')}
      </Link>
      <span className="mx-2">
        <ArrowRightShort color="var(--placeholder)" style={{ marginTop: '-4px' }} />
      </span>
      <span className="breadcrumb">{t('carriera.proposte_di_tesi.title_half_lowercase')}</span>
    </div>
  );
}
