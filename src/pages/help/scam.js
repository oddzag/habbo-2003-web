import { Routes, Route, NavLink } from "react-router-dom";

import ScamBusters from './scam/scambusters.js';
import Scammed from './scam/scammed.js';
import FurniScam from './scam/furni.js';
import PasswordScam from './scam/passwords.js';
import EmailScam from './scam/email.js';
import PhoneScam from './scam/phone.js';
import ScamReport from './scam/scamreport.js';

function Scam() {
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
            <NavLink to="/help/scam/furni" end>Furni scams</NavLink>
            <NavLink to="/help/scam/passwords">Password scams</NavLink>
            <NavLink to="/help/scam/email">Email scams</NavLink>
            <NavLink to="/help/scam/phone">Phone scams</NavLink><br />
            <NavLink to="/help/scam/scamreport">Report a scammer</NavLink>
            <NavLink to="/help/scam/scammed">Help I've been scammed</NavLink>
        </div>

          <div id="navi_ruler" style={{margin: '10px 0 10px -20px'}}></div>

          <Routes>
            <Route path="/" index element={<ScamBusters />}></Route>
            <Route path="/scammed" index element={<Scammed />}></Route>
            <Route path="/furni" index element={<FurniScam />}></Route>
            <Route path="/passwords" index element={<PasswordScam />}></Route>
            <Route path="/email" index element={<EmailScam />}></Route>
            <Route path="/phone" index element={<PhoneScam />}></Route>
            <Route path="/scamreport" index element={<ScamReport />}></Route>
          </Routes>
          </div>

        </div>
      </div>
      <div id="main_footer"></div>
    </>
  );
}

export default Scam;