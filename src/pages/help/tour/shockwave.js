import { NavLink } from "react-router-dom"

function Shockwave() {
  return (
    <>
        <div id="main_top" class="active"></div>
        <div id="subnav_one">
            <NavLink to="/help" end>What's Habbo Hotel?</NavLink>
            <NavLink to="/help/safety">Safety</NavLink>
            <NavLink to="/help/parents">Parents' Guide</NavLink>
            <NavLink to="/help/faqs">FAQs</NavLink>
            <NavLink to="/help/scam">Scam Busters</NavLink> <br />
            <NavLink to="/help/contact">Contact us</NavLink>
        </div>

        <div id="navi_ruler"></div>

        <div id="main_mid">
            <div id="content_sub">
            <div id="subnav_two">
              <NavLink to="/help/tour/checkin">Checking in for the first time</NavLink>
              <NavLink to="/help/tour/moving">Moving around and chatting</NavLink> <br />
              <NavLink to="/help/tour/design">Designing your own room</NavLink>
              <NavLink to="/help/tour/games">Playing games</NavLink>
              <NavLink to="/help/tour/safe">Staying safe</NavLink> <br />
              <NavLink to="/help/tour/news">Getting the latest news</NavLink>
            </div>
            <div id="navi_ruler" style={{margin: '10px 0 10px -20px'}}></div>
                <h1 style={{fontSize: '14px'}}>Installing Shockwave</h1>
                <p>
                    In order to access the hotel, you must have Adobe Shockwave installed and enabled. 
                    The issue with this, however, is that Shockwave is not only deprecated, but it's
                    universally disabled in all modern web browsers. 
                    <br /><br />
                    <div id="basilisk"></div>
                    Of the few options still available, the easiest is to use a <b>modified</b> version of the
                    Basilisk Browser. You can download it directly by clicking <a href="/Basilisk.zip">here</a>. Copy 
                    the contents of the zip file and then run <b>Browser.bat</b>.
                    <br /><br />
                    For more information on Basilisk, check out their <a href="https://www.basilisk-browser.org/" target="_blank" rel="noreferrer">homepage</a>. To see more on the modified version, check 
                    out <a href="https://forum.ragezone.com/f353/portable-browser-with-flash-shockwave-1192727/" target="_blank" rel="noreferrer">RaGEZONE</a>.
                    <br /><br />
                    If you're interested in some of the efforts being made to reverse-engineer and modernize
                    Shockwave, check out <a href="https://github.com/ProjectorRays/ProjectorRays" target="_blank" rel="noreferrer">ProjectorRays on Gitub</a>. 
                </p>
            </div>
        </div>
        <div id="main_footer"></div>
    </>
  );
}

export default Shockwave;