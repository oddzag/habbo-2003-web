import { Route, Routes, Link } from "react-router-dom"

function Games() {
  return (
    <>
      <div id="games_two"></div><div id="games_one"></div>
      <h1>Games</h1>
      <p style={{width: '53%'}}>
        <b>Diving in the Lidos</b><br />
        Habbo Hotel has two outdoor swimming pools - the Habbo Lidos. Once you've
        changed into your swimming costume, you can lounge about by the side of the
        pool or take a quick dip to cool off. But even better still, you can test
        your diving skills in the high diver tower. Two Habbo Credits will get you
        five dives - there's a ticket machine by the lift doors at the bottom of
        the dive tower.
      </p>
      <div class="sub_content_ruler"></div>
      <div id="games_three"></div>
      <p style={{width: '53%'}}>
        <b>Other pool games</b><br />
        You can also use your dive tickets to play Wobble Squabble in the
        Rooftop Rumble - our rooftop pool/cafe area. You stand on inflatables
        and try and knock your opponant off into the water. The skill is being
        able to push your opponant while keeping your balance at the same time.
        Wobble Squabble has a scoreboard so you can see week by week how you're
        doing. Like with dives, two Habbo Credits gets you five games though if
        you win, you get to continue playing with the same ticket.
      </p>
      <div class="sub_content_ruler"></div>
      <p style={{width: '53%'}}>
        <b>Traditional games</b><br />
        Pop along to the Cunning Fox Gameshall if you'd rather keep dry and
        play chess, noughts and crosses, poker or battleships. There's a
        separate room for each game and they're all free!
      </p>
      <div class="sub_content_ruler"></div>
      <p><Link to="/help/tour/safe" style={{fontWeight: 'bold'}}>Staying safe {">"}</Link></p>
    </>
  );
}

export default Games;