/* src/App.js */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Designs from './pages/Designs';
import './styles/colors.scss';
import './App.scss'
import Colors from './pages/Colors';
import Tips from './pages/Tips';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/Club-de-Juntadas" element={<Home />} />
          <Route path="/Club-de-Juntadas/designs" element={<Designs />} />
          <Route path="/Club-de-Juntadas/tips" element={<Tips />} />
          <Route path="/Club-de-Juntadas/colors" element={<Colors />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
