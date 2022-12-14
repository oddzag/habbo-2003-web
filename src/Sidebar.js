import { Link } from "react-router-dom";
import openHotel from './index.js';

function Sidebar() {

  return (
    <>
		<div id="sidebar">
			<div className="box_blue_top"></div>
			<div className="box_blue_mid">
				<p id="habbos_online">Habbos in the hotel:</p>

				<Link onClick={openHotel}>
					<p id="check_in">Check in!</p>
				</Link>

			</div>
			<div className="box_blue_footer"></div>

			<div className="box_yellow_top"></div>
			<div className="box_yellow_mid">
				<h1 id="check_in_prob">CHECK IN PROBLEMS?</h1>
				<p>
					If you haven't been to Habbo Hotel before why not <Link to="./help/tour/checkin">go on a hotel tour</Link>?
					<br /><br />
					You'll need Shockwave to check in to the hotel, but don't worry - it's free (and safe) to download.
					<br /><br />
				</p>
				<Link to="./help/shockwave"><div id="shockwave"></div></Link>
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
				<Link to="./help/safety/terms">Terms and Conditions</Link>
				<Link to="./help/safety/privacy">Privacy Policy</Link>
				<Link to="">Habbo Ltd</Link>
				<Link to="">Sulake Labs</Link>
				<a href="https://project.habbo.gs/">Project Habbo</a>
				<a href="https://github.com/oddzag/habbo-2003" target="_blank" rel="noreferrer">Github</a>
			</div>
		</div>
    </>

  );
}

export default Sidebar;