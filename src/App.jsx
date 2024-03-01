import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Shop from './components/pages/Shop/Shop';
import Team from './components/pages/Team/Team';
import Impact from './components/pages/Impact/Impact';
import Gift from './components/pages/Gift/Gift';
import FAQ from './components/pages/FAQ/FAQ';
import Journal from './components/pages/Journal/Journal';
import Contacts from './components/pages/Contacts/Contacts';
import Home from './components/pages/Home/Home';
import NewJournalContent from './components/pages/Journal/NewJournalContent'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/impact" element={<Impact />} />
          <Route exact path="/gift" element={<Gift />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/journal" element={<Journal />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/articles/:id" element={<NewJournalContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;