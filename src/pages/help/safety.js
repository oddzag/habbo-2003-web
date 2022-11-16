import { Route, Routes, Link, NavLink, Outlet } from "react-router-dom";

import HabboWay from './safety/habboway.js';
import PrivacyPledge from './safety/privacypledge.js';
import Privacy from './safety/privacy.js';
import Chat from './safety/chat.js';
import Mods from './safety/mods.js';
import Language from './safety/language.js';
import Console from './safety/console.js';
import Terms from './safety/terms.js';

function Safety() {
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
            <NavLink to="/help/scam">Scam Busters</NavLink> <br />
            <NavLink to="/help/contact">Contact us</NavLink>
          </div>

          <div id="navi_ruler"></div>

          <div id="content_sub">
          <div id="subnav_two">
            <NavLink to="/help/safety" end>Habbo Way</NavLink>
            <NavLink to="./privacypledge">Privacy Pledge</NavLink>
            <NavLink to="./chat">Top chat tips</NavLink>
            <NavLink to="./mods">Hotel moderators</NavLink><br />
            <NavLink to="./language">Bad Language</NavLink>
            <NavLink to="./console">Habbo Console</NavLink>
          </div>

          <div id="navi_ruler" style={{margin: '10px 0 10px -20px'}}></div>

          <Routes>
            <Route path="/" index element={<HabboWay />}></Route>
            <Route path="/habboway" index element={<HabboWay />}></Route>
            <Route path="/privacypledge" element={<PrivacyPledge />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/mods" element={<Mods />}></Route>
            <Route path="/language" element={<Language />}></Route>
            <Route path="/console" element={<Console />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
          </Routes>
          </div>

        </div>
      </div>
      <div id="main_footer"></div>
    </>
  );
}

export default Safety;