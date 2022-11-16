import { Route, Routes, Link, NavLink, Outlet } from "react-router-dom";

import Feedback from './contact/feedback.js';
import Password from './contact/password.js';
import Bug from './contact/bug.js';
import Hobba from './contact/hobba.js';

function Contact() {
  return (
    <>
      <div id="main_top" class="active"></div>
      <div id="main_mid">
        <div id="content">

          <div id="subnav_one">
            <NavLink to="/help/">What's Habbo Hotel?</NavLink>
            <NavLink to="/help/safety">Safety</NavLink>
            <NavLink to="/help/parents">Parents' Guide</NavLink>
            <NavLink to="/help/faqs">FAQs</NavLink>
            <NavLink to="/help/scam">Scam Busters</NavLink><br />
            <NavLink to="/help/contact">Contact us</NavLink>
          </div>

          <div id="navi_ruler"></div>

          <div id="content_sub">
          <div id="subnav_two">
            <NavLink to="/help/contact" end>Feedback</NavLink>
            <NavLink to="./password">Forgotten Password</NavLink>
            <NavLink to="./bug">Report a bug</NavLink>
            <NavLink to="./hobba">Apply to be a Hobba</NavLink>
          </div>

          <div id="navi_ruler" style={{margin: '10px 0 10px -20px'}}></div>

          <Routes>
            <Route path="/" index element={<Feedback />}></Route>
            <Route path="/feedback" index element={<Feedback />}></Route>
            <Route path="/password" element={<Password />}></Route>
            <Route path="/bug" element={<Bug />}></Route>
            <Route path="/hobba" element={<Hobba />}></Route>
          </Routes>
          </div>

        </div>
      </div>
      <div id="main_footer"></div>
    </>
  );
}

export default Contact;