import { Link } from "react-router-dom";
import openHotel from '../../../index.js';

function CheckIn() {
  return (
    <>
      <h1>Visiting Habbo Hotel for the first time</h1>
      <div class="content_ruler"></div>
      <p>
        <b>Installing Shockwave</b><br />
        Before you can check into the hotel, you'll need to download Shockwave.
        There are no modern browsers that support Shockwave. The easiest option is to
        install or use the portable version of a fork of Basilisk Browser, made by
        Quackster on RaGEZONE.<br /><br />
        Click <a href="https://forum.ragezone.com/f353/portable-browser-with-flash-shockwave-1192727/" target="_blank" rel="noreferrer">here</a> for more information.
      </p>

      <div class="content_ruler"></div>
      <div id="checkin_one"></div>
      <p>
        <b>Checking in for the first time</b><br />
        Once you've done that you're ready to check in to the hotel. 
        Click on <Link onClick={openHotel}>'check in'</Link> and a new window will open. When the 
        'hotel loading' bar reaches 100%, you'll see the hotel from the outside.
      </p>

      <div class="sub_content_ruler"></div>

      <p>
        <b>Creating your Habbo</b><br />
        <div id="checkin_two"></div>
        Now the fun begins! Click in the top box (where is says 'First time here?')
        to open up the registration window. You'll need to choose a name for your
        Habbo, decide whether you want to be a girl or a boy and tell us what your
        mission is. Oh - and don't forget to choose your clothes! You can change
        everything except your name later, so don't take too long deciding!
      </p>

      <div id="checkin_three"></div>
      <div class="sub_content_ruler"></div>
      <p>
        <b>Keeping your Habbo secure</b><br />
        Habbo accounts are very safe as long as you have a good password and keep
        it secret. Good passwords are between six and nine characters long and
        contain both numbers and letters.
        <br /><br />
        Secure passwords can sometimes be a bit difficult to remember though,
        so it's important that you enter your email address correctly. Then, if
        you forget your password, we can email it to you.
        <br /><br />
        <b>Why do we want to know that?</b><br />
        You may wonder why we want to know your mobile phone number and where you
        live. No, we're not going to phone you, or pop round for tea! And we are
        certainly not going to share your details with anyone (read more about our <Link to="/help/safety/privacypledge">Privacy Pledge</Link>).
        <br /><br />
        If you choose to put in your mobile phone <br />number, then your Habbo Friends
      </p>

      
      <p>
        <div id="checkin_four"></div>
        can send you SMS from the hotel without knowing what your phone number is.
        The same goes for emails.
        <b /><br />
        We like to know roughly where you live so that we can make sure we cater
        for every Habbo's needs - if we have lots of French Habbos for example,
        we might decide to open a Habbo Hotel in France!

        <div class="sub_content_ruler"></div>
        <Link to="/help/tour/moving" style={{fontWeight: 'bold'}}>Moving around and chatting {">"}</Link>
      </p>
    </>
  );
}

export default CheckIn;