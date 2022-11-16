import { Route, Routes, Link } from "react-router-dom";


function Sidebar() {
	function openHotel() {
		window.open('hotel.js', '', 'height=580,width=750');
	}
  return (
    <>
    		<div id="sidebar">
				<div className="box_blue_top"></div>
				<div className="box_blue_mid">
					<p id="habbos_online">Habbos in the hotel:</p>

					<a onClick={() => window.open("hotel.js", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}>
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
						<center>
							<Link to="/help/shockwave"><img src="/img/shockwave.gif" /></Link>
						</center>
					</p>
				</div>
				<div className="box_yellow_footer"></div>

				<div className="box_blue_top"></div>
				<div className="box_blue_mid">
					<div id="iac"></div>
					<div id="bt"></div>
					<div id="bob2"></div>
				</div>
				<div className="box_blue_footer"></div>

				<div id="sidebar_links">
					<Link to="/help/safety/terms">Terms and Conditions</Link>
					<Link to="/help/safety/privacy">Privacy Policy</Link>
					<Link to="">Habbo Ltd</Link>
					<Link to="">Sulake Labs</Link>
				</div>
			</div>
    </>
  );
}

export default Sidebar;