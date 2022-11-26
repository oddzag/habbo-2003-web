import { Routes, Route, Link } from "react-router-dom";
import NewWindow from 'react-new-window';
import Hotel from "./Hotel.js";

function Sidebar() {

  return (
    <>
		<div id="sidebar">
			<div className="box_blue_top"></div>
			<div className="box_blue_mid">
				<p id="habbos_online">Habbos in the hotel:</p>

				<a onClick={(e) => {e.preventDefault(); window.open('/hotel', 'popup', 'width=720,height=540')}}>
					<p id="check_in">Check in!</p>
				</a>

			</div>
			<div className="box_blue_footer"></div>

			<div className="box_yellow_top"></div>
			<div className="box_yellow_mid">
				<h1 id="check_in_prob">CHECK IN PROBLEMS?</h1>
				<p>
					If you haven't been to Habbo Hotel before why not <Link to="/help/tour/checkin">go on a hotel tour</Link>?
					<br /><br />
					You'll need Shockwave to check in to the hotel, but don't worry - it's free (and safe) to download.
					<br /><br />
					<Link to="/help/shockwave"><img src="/img/shockwave.gif" alt="" style={{margin: '0 auto'}} /></Link>
				</p>
			</div>
			<div className="box_yellow_footer"></div>

			<div className="box_blue_top"></div>
			<div className="box_blue_mid">
				<div id="iac" style={{marginBottom: '8px'}}></div>
				<div id="bt" style={{marginBottom: '8px'}}></div>
				<div id="bob2"></div>
			</div>
			<div className="box_blue_footer"></div>

			<div id="sidebar_links">
				<Link to="/help/safety/terms">Terms and Conditions</Link>
				<Link to="/help/safety/privacy">Privacy Policy</Link>
				<Link to="">Habbo Ltd</Link>
				<Link to="">Sulake Labs</Link>
				<a href="https://github.com/oddzag/habbo-2003" target="_blank" rel="noreferrer">Github</a>
			</div>
		</div>
    </>

  );
}

export default Sidebar;