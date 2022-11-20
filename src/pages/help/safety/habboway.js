import { Link } from "react-router-dom"

function HabboWay() {
  return (
    <>
      <div id="habboway_one"></div>
      <h1>The Habbo Way</h1>
      <p>
        Habbo Hotel is a place where people come to relax, hang out and make new
        friends in a safe, non-threatening environment. The rules are very simple.
        Stick to them and you'll have fun; break them and you'll get yourself banned.
      </p>

      <div class="content_ruler" style={{margin: '21px 0 10px 0'}}></div>
      <div id="habboway_two"></div>

      <p>
        <b>You must not:</b>
        <ul id="habboway_must_not">
          <li>Use any hacking, scripting or editing program within the hotel</li>
          <li>Steal other Habbos' Credits or furniture</li>
          <li>Describe sexual acts to other Habbos</li>
          <li>Pester people who don't want to talk to you</li>
          <li>Swear or use sexually graphic terms or be racist</li>
          <li>Ask other Habbos for their password, email addresses or other personal information</li>
          <li>Type your password anywhere except in the 'Check in' box on www.habbohotel.com</li>
          <li>Break the law in the hotel or talk others into breaking it</li>
        </ul>
      </p>

      <div class="content_ruler" style={{margin: '0 0 10px 0'}}></div>
      <div id="habboway_three"></div>
        <p>
          <b>You should:</b>
          <ul id="habboway_should">
            <li>Have fun!</li>
            <li>Hang out with your friends</li>
            <li>Make new friends</li>
            <li>Respect other people's views and beliefs</li>
          </ul>
        </p>

      <div class="content_ruler" style={{margin: '0 0 10px 0'}}></div>
      <p>
        For more information on how we work to make the hotel as safe as
        possible, and what you can do yourself, please read the other sections
        in Help & Safety.
        <br /><br />
        <b>
          Habbo Hotel reserves the right to use any means, whether technical or
          human, to uphold the Habbo Way. The Habbo Hotel management also reserves
          the right to refuse admission and may report anyone who breaks the law
          to the authorities (yes, that means the police).
        </b>
        <br /><br />
        Please read our full <Link to="./terms">Terms and Conditions</Link> by clicking here. If you are
        under 14, you must make sure your parents read them too.
      </p>
    </>
  );
}

export default HabboWay;