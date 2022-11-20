import { Link } from "react-router-dom"

function Moving() {
  return (
    <>
      <h1>Moving around the hotel and <br />chatting</h1>

      <div id="moving_one"></div>
      <p>
        <b>The Hotel Navigator</b><br />
        At the bottom of your screen you will see a mini hotel - this is the
        Hotel Navigator. Click on it to open it up. One tab shows you all the
        public spaces you can go to - the clubs, cafés, swimming pools etc.
        The other tab is where you'll find the guest rooms - rooms other Habbos
        have made themselves.
      </p>

      <div id="moving_two"></div>
      <div class="sub_content_ruler"></div>
      <div id="moving_three"></div>
      <p>
        <b>Moving around a room</b><br />
        It's easy to move inside a room - just click on a square to walk to it.
        If your feet need a rest, click on or under beds and chairs to sit or
        lie down. And if you fancy a boogie, click on your Habbo and then click
        the 'dance' button that appears on the right hand side of the screen.
      </p>

      <div class="sub_content_ruler"></div>
      <div id="moving_four"></div>
      <p>
        <b>Chatting</b><br />
        If you want to say something, type in the box at the bottom of the screen
        and hit the return key. Only the people near you will hear - Habbos futher
        away will see dots in your speech bubble - so choose 'shout' to let the
        whole room know your thoughts. If you want to whisper something secret to
        another Habbo, choose 'whisper' and click on them before you hit return.
      </p>

      <div id="moving_five"></div>
      <div class="sub_content_ruler"></div>
      <div id="moving_six"></div>
      <p style={{width: '55%'}}>
        <b>Making friends</b><br />
        Met someone you like? Click on them and click 'Ask to be a Friend' and a
        Friend Request will be sent to their <Link to="/help/safety/console">Habbo Console.</Link> That's 
        the yellow icon next to the Hotel Navigator. If they accept your request,
        they'll be added to your Friends List.
      </p>
      <div class="sub_content_ruler"></div>
      <p><Link to="/help/tour/design" style={{fontWeight: 'bold'}}>Designing your own room {">"}</Link></p>
    </>
  );
}

export default Moving;