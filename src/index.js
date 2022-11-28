import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import ScrollToTop from './ScrollToTop.js';
import Sidebar from './Sidebar.js';

import Home from './pages/home.js';
import Help from './pages/help.js';
	import Safety from './pages/help/safety.js';
	import Parents from './pages/help/parents.js';
	import FAQs from './pages/help/faqs.js'
	import Contact from './pages/help/contact.js'
	import Scam from './pages/help/scam.js';

  import Shockwave from './pages/help/tour/shockwave.js'
import Credits from './pages/credits.js';
import Shop from './pages/shop.js';

import Hhw_latest from './pages/community/hhw_latest.js';
import Hotel from './Hotel.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  return (
    <>
    <div id="index">
			<div class="logo">
				<div id="habbo_logo"></div>
			</div>

			<div class="banner">
				<div id="banner_box">
					<div id="banner_insert"></div>
				</div>
			</div>

      <ScrollToTop />
      
      <div id="main">
        <Sidebar />
          <div id="main_content">
            <div id="nav">
              <NavLink to="/" id="nav_home"></NavLink>
              <NavLink to="/help" id="nav_help"></NavLink>
              <NavLink to="/credits" id="nav_credits"></NavLink>
              <NavLink to="/shop" id="nav_shop"></NavLink>
            </div>

            <Routes>
              {/* Main Nav */}
              <Route path="/" index element={<Home />}></Route>
              <Route path="/help/*" element={<Help />}></Route>
                  <Route path="/help/safety/*" index element={<Safety />}></Route>
                  <Route path="/help/parents/" index element={<Parents />}></Route>
                  <Route path="/help/faqs/*" index element={<FAQs />}></Route>
                  <Route path="/help/scam/*" index element={<Scam />}></Route>

                  <Route path="/help/contact/*" index element={<Contact />}></Route>

                  <Route path="/help/shockwave" index element={<Shockwave />}></Route>
              <Route path="/credits" element={<Credits />}></Route>
              <Route path="/shop" element={<Shop />}></Route>

              <Route path="/community/hhw_latest" element={<Hhw_latest />}></Route>
            </Routes>
            <p style={{textAlign: 'center', color: '#69C', paddingTop: '10px'}}>
              All rights including trademarks, copyright and database rights in this website and its
              contents are owned by or licensed to Habbo Ltd. All rights reserved. Powered by Sulake technology.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


root.render(
  <Router>
    <Routes>
      <Route path="/*" index element={<Main />}></Route>
      <Route path="/hotel" element={<Hotel />}></Route>
        //Because this element is rendered in the popup window, in a prod build, the /hotel
        //path is handled by nginx, which throws a 404. I added a location directive in the
        //nginx server block just for /hotel. This keeps it inside the scope of the react app
    </Routes>
  </Router>
);

