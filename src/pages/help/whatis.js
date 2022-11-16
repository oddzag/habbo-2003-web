import { Link, NavLink } from "react-router-dom";

function WhatIs() {
  return (
    <>
      <h1>What is Habbo Hotel?</h1>
      <div id="dancer"></div>
      <p>
          Habbo Hotel is a virtual hotel where you can hang out and make new friends.
          It's designed for 14 to 20 year olds in the UK, but everyone is welcome.
          <br /><br />
          When you register you 'become' a Habbo and then you can walk, dance, eat,
          drink and chat in the cafes, restaurants, swimming pools and games rooms.
          You can even decorate and furnish your own room.
          <br /><br />
          It's not hard to break into conversation for the first time and you'll soon
          find a friend who has something in common with you. And you don't need to
          worry - we won't tell anyone your personal details and we've worked hard to make the hotel safe (read more about 
          our <Link to="/help/safety">safety</Link> and <Link to="/help/safety/privacy">privacy policies</Link> here).
          <br /><br />
      </p>
      <div id="habbos_tour"></div>
      <p>
          So use the hotel for whatever you want - as a messenger, email system,
          chatroom, place to hang out with your friends or to meet new people. And yes,
          there are a few <Link to="/help/safety">rules</Link>,
          but only to make the experience safe and fun for as many Habbos as possible. Enjoy!
      </p>
      <div class="content_ruler" style={{margin: '20px auto'}}></div>

      <div id="tour_links">
        <NavLink to="./tour/checkin">Checking in for the first time</NavLink>
        <NavLink to="./tour/moving">Moving around and chatting </NavLink>
        <NavLink to="./tour/design">Designing your own room </NavLink>
        <NavLink to="./tour/games">Playing games </NavLink>
        <NavLink to="./tour/safe">Staying safe </NavLink>
        <NavLink to="./tour/news">Getting the latest news </NavLink>
      </div>

      <div id="bussi_kiertoajelu"></div>
    </>
  );
}

export default WhatIs;