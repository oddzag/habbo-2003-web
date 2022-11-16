import { Route, Routes, Link } from "react-router-dom"

function Home() {
  return (
    <>
    <div id="main_top"></div>
		<div id="main_mid">
      <div id="content">
      <div className="home">
        <div className="home_banner">
          <div id="home_banner"></div>
          <a onClick={() => window.open("hotel.js", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")}>
            <div id="check_in_button"></div>
          </a>
        </div>

        <div className="home_left">
          <h1 style={{margin: '10px 0'}}>Welcome to Habbo Hotel</h1>
          <p>
            Habbo Hotel is a virtual hotel where you can meet your friends and create a room of your own! <br />
            <Link to="/help">Read more</Link>
          </p>
          <div className="content_ruler" style={{width: '201px'}}></div>

          <div id="alert_wrap">
            <div id="alert"></div>
          </div>
          <h1 style={{fontSize: '10px', marginBottom: '10px'}}>ONLINE SAFETY</h1>
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
          <div id="headlines_mid"></div>
          <div id="headlines_footer"></div>

          <div id="box_gold_top"></div>
          <div id="box_gold_mid"><br /></div>
          <div id="box_gold_footer"></div>

          <div id="box_brown_top"></div>
          <div id="box_brown_mid"><br /></div>
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