import { Route, Routes, Link, NavLink, Outlet } from "react-router-dom";

import General from './faqs/general.js';
import Moderation from './faqs/moderation.js';
import Rooms from './faqs/rooms.js';
import Payment from './faqs/payment.js';
import NewFeatures from './faqs/newfeatures.js';
import Technical from './faqs/technical.js';
import CatalogueItems from './faqs/catalogueitems.js';

function FAQs() {
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
                        <NavLink to="/help/faqs" end>General</NavLink>
                        <NavLink to="./moderation">Moderation</NavLink>
                        <NavLink to="./rooms">Rooms</NavLink>
                        <NavLink to="./payment">Habbo Credits</NavLink>
                        <NavLink to="./newfeatures">New Features</NavLink> <NavLink to="./technical">Technical</NavLink>
                        <NavLink to="./catalogueitems">Catalogue Items</NavLink>
                    </div>

                    <div id="navi_ruler" style={{margin: '10px 0 10px -20px'}}></div>

                    <Routes>
                        <Route path="/" index element={<General />}></Route>
                        <Route path="/moderation" index element={<Moderation />}></Route>
                        <Route path="/rooms" index element={<Rooms />}></Route>
                        <Route path="/payment" index element={<Payment />}></Route>
                        <Route path="/newfeatures" index element={<NewFeatures />}></Route>
                        <Route path="/technical" index element={<Technical />}></Route>
                        <Route path="/catalogueitems" index element={<CatalogueItems />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
        <div id="main_footer"></div>
    </>
  );
}

export default FAQs;