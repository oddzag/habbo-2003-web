import { Link } from "react-router-dom";
import openHotel from '../index.js';

function Home() {
  return (
    <>
    <div id="main_top"></div>
		<div id="main_mid">
      <div id="content">
      <div className="home">
        <div className="home_banner">
          <div id="home_banner"></div>
          <Link onClick={openHotel}>
					  <div id="check_in_button"></div>
				  </Link>
        </div>

        <div className="home_left">
          <h1 style={{margin: '0 0 10px 0px'}}>Welcome to Habbo Hotel</h1>
          <p>
            Habbo Hotel is a virtual hotel where you can meet your friends and create a room of your own! <br />
            <Link to="/help">Read more</Link>
          </p>
          <div className="content_ruler" style={{width: '201px'}}></div>

          <div id="alert_wrap">
            <div id="alert"></div>
          </div>
          <h1 style={{fontSize: '10px', margin: '0 0 10px 0px'}}>ONLINE SAFETY</h1>
          <p style={{fontWeight: 'bold', marginBottom: '10px'}}>
            We've worked hard to make sure that the hotel is as safe as it can be.
            Learn more about our moderators, language filters and how we keep your
            details safe <Link to="/help/safety">here</Link>.
          </p>
          <p>
            Habbo Hotel is moderated between the hours of 9am and midnight BST, seven days a week.
          </p>
          <div className="content_ruler" style={{width: '201px'}}></div>
          <div id="threehabbos"></div>
        </div>

        <div className="home_right">
          <div id="headlines_top"></div>
          <div id="headlines_mid"> {/*these 3 boxes are just dummy text, they're not rendered dynamically*/}
            <p style={{padding: '10px 10px'}}>
              <b style={{color: '#600'}}>July 29, 2003</b> Free Habbo Club for a year when you sign up for BT Broadband! Find out more here.
              <br /><br />
              <b style={{color: '#600'}}>July 30, 2003</b> IMPORTANT SAFETY NEWS and THE NAME GAME and more in this week's HabboHood Watch.
              <br /><br />
              <b style={{color: '#600'}}>July 21, 2003</b> Wallpaper, paint and flooring back in the Catalogue.
              <br /><br />
              <b style={{color: '#600'}}>July 21, 2003</b> The new Rare is in the Catalogue now!
            </p>
          </div>
          <div id="headlines_footer"></div>

          <div id="box_gold_top"></div>
          <div id="box_gold_mid">
            <p style={{color: '#5D1208', padding: '10px 10px'}}>
              <div id="general" style={{float: 'right'}}></div>
              <b>Habbo Hotel Happenings</b><br />
              Want a year's free Habbo Club?! We tell you how..<br />
              <b style={{color: '#330'}}>July 31, 2003</b>
            </p>
          </div>
          <div id="box_gold_footer"></div>

          <div id="box_brown_top"></div>
          <div id="box_brown_mid">
            <p style={{color: '#5D1208', padding: '5px 5px 5px 10px'}}>
              <div id="funkyfriday"></div>
              Win a chance to visit the Habbo office on Meet The Manager day!<br /><br />
              <u>Click here...</u>
            </p>
          </div>
          <div id="box_brown_footer"></div>
        </div>
      </div>
		</div>
		</div>
		<div id="main_footer"></div>
    </>
  );
}

export default Home;