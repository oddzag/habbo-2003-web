import { Route, Routes, NavLink } from "react-router-dom";

import WhatIs from './help/whatis.js';
import CheckIn from './help/tour/checkin.js';
import Moving from './help/tour/moving.js';
import Design from './help/tour/design.js';
import Games from './help/tour/games.js';
import Safe from './help/tour/safe.js';
import News from './help/tour/news.js';

function Help() {
  return (
    <>
      <div id="main_top" class="active"></div>
      <div id="main_mid">
        <div id="content">

          <div id="subnav_one">
            <NavLink to="/help">What's Habbo Hotel?</NavLink>
            <NavLink to="/help/safety">Safety</NavLink>
            <NavLink to="/help/parents">Parents' Guide</NavLink>
            <NavLink to="/help/faqs">FAQs</NavLink>
            <NavLink to="/help/scam">Scam Busters</NavLink><br />
            <NavLink to="/help/contact">Contact us</NavLink>
          </div>

          <div id="navi_ruler"></div>

          <div id="content_sub">
            <div id="subnav_two">
              <NavLink to="./tour/checkin">Checking in for the first time</NavLink>
              <NavLink to="/help/tour/moving">Moving around and chatting</NavLink> <br />
              <NavLink to="/help/tour/design">Designing your own room</NavLink>
              <NavLink to="/help/tour/games">Playing games</NavLink>
              <NavLink to="/help/tour/safe">Staying safe</NavLink> <br />
              <NavLink to="/help/tour/news">Getting the latest news</NavLink>
            </div>

            <div id="navi_ruler" style={{margin: '10px 0 10px -20px'}}></div>

            <Routes>
              <Route path="/" index element={<WhatIs />}></Route>
              <Route path="/tour/checkin" element={<CheckIn />}></Route>
              <Route path="/tour/moving" element={<Moving />}></Route>
              <Route path="/tour/design" element={<Design />}></Route>
              <Route path="/tour/games" element={<Games />}></Route>
              <Route path="/tour/safe" element={<Safe />}></Route>
              <Route path="/tour/news" element={<News />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      
      <div id="main_footer"></div>
    </>
  );
}

export default Help;