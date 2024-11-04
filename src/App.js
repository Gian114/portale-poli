import React, { createContext, useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";
import { Route, Routes, useLocation } from "react-router-dom";

import "./styles/Utilities.css";

import PoliNavbar from "./components/Navbar";
import Servizi from "./pages/Servizi";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Sidebar from "./components/Sidebar";
import CoursePage from "./pages/didattica/CoursePage";
import Materiale from "./pages/course_sections/Materiale";
import OrarioCorso from "./pages/course_sections/OrarioCorso";
import Guida from "./pages/course_sections/Guida";
import Elaborati from "./pages/course_sections/Elaborati";
import Appelli from "./pages/course_sections/Appelli";
import Avvisi from "./pages/course_sections/Avvisi";
import VirtualClassroom from "./pages/course_sections/VirtualClassroom";
import Didattica from "./pages/Didattica";
import AreaPersonale from "./pages/AreaPersonale";
import Carriera from "./pages/Carriera";
import Opportunita from "./pages/Opportunita";
import Libretto from "./pages/didattica/Libretto";
import Lingue from "./pages/didattica/Lingue";
import Corsi from "./pages/didattica/Corsi";
import ProposteDiTesi from "./pages/carriera/ProposteDiTesi";
import LaureaEdEsameFinale from "./pages/carriera/LaureaEdEsameFinale";
import Job from "./pages/opportunita/Job";
import Tirocinio from "./pages/opportunita/Tirocini";
import OrarioLezioni from "./pages/didattica/OrarioLezioni";
import Moodle from "./pages/course_sections/Moodle";

import Avvisi_GC from "./data/Avvisi_GC.json";

export const FavoritesContext = createContext(null);
export const AvvisiContext = createContext(null);

function App() {
  const [favorites, setFavorites] = useState([]);
  const [avvisi, setAvvisi] = useState([Avvisi_GC]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
      </style>
      <FavoritesContext.Provider
        value={{
          favorites,
          setFavorites,
        }}
      >
        <AvvisiContext.Provider
          value={{
            avvisi,
            setAvvisi,
          }}
        >
          <PoliNavbar avvisi={avvisi} setAvvisi={setAvvisi} />
          <Row>
            <Sidebar />
            <Col className={"custom-content reduced"}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/area_personale" element={<AreaPersonale />} />
                <Route path="/home" element={<Home />} />
                <Route path="/didattica" element={<Didattica />}>
                  <Route path="" element={<Corsi />} />
                  <Route path="libretto" element={<Libretto />} />
                  <Route path="orario" element={<OrarioLezioni />} />
                  <Route path="lingue" element={<Lingue />} />
                </Route>
                <Route path="/carriera" element={<Carriera />} />
                <Route path="/carriera/proposte_di_tesi" element={<ProposteDiTesi />} />
                <Route path="/carriera/laurea_ed_esame_finale" element={<LaureaEdEsameFinale />} />
                <Route path="/opportunita" element={<Opportunita />} />
                <Route path="/opportunita/job" element={<Job />} />
                <Route path="/opportunita/tirocinio" element={<Tirocinio />} />
                <Route path="/servizi" element={<Servizi />} />
                <Route path="/help" element={<Help />} />
                <Route path="/didattica/:nome" element={<CoursePage />}>
                  <Route path="materiale" element={<Materiale />} />
                  <Route path="avvisi" element={<Avvisi />} />
                  <Route path="orario" element={<OrarioCorso />} />
                  <Route path="guida" element={<Guida />} />
                  <Route path="moodle" element={<Moodle />} />
                  <Route path="elaborati" element={<Elaborati />} />
                  <Route path="appelli" element={<Appelli />} />
                  <Route path="vc" element={<VirtualClassroom />} />
                </Route>
              </Routes>
            </Col>
          </Row>
        </AvvisiContext.Provider>
      </FavoritesContext.Provider>
    </>
  );
}

export default App;
