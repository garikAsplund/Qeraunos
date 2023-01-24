//importing structures
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

//importing styling and images
import './stylesheets/styles.scss';

//importing components
import Demo from './pages/Demo';
import Home from './pages/Home';
import DemoClient from './pages/DemoClient';
import Team from './pages/Team';
import Navbar from './container/Navbar';
import Installation from './pages/Installation';

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const enterSite = () => {
    if (showNav === false) {
      setShowNav(true);
      useNavigate('/demo-server');
    } else {
      setShowNav(false);
    }
  };

  const showNavBar = () => {
    if (showNav !== false) {
      return <Navbar enterSite={enterSite} />;
    }
  };

  return (
    <RecoilRoot>
      <div>
        {showNavBar()}
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  enterSite={enterSite}
                  showNav={showNav}
                  setShowNav={setShowNav}
                />
              }
            />
            <Route path="/demo" element={<Demo />} />
            <Route path="/demo-client" element={<DemoClient />} />
            <Route path="/team" element={<Team />} />
            <Route path="/installation" element={<Installation />} />
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
