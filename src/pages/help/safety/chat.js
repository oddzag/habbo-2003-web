import { Link } from "react-router-dom";

function Chat() {
  return (
    <>
      <h1>Habbo Hotel's top chat tips</h1>
      <div id="chat_one"></div>
      <p>
        The Internet can be a great place to meet people and form new friendships.
        But you need to bear in mind that it is easy to lie online, and some
        people may be pretending to be younger than they really are. You may
        feel that you know them really well, but can never be sure of what a
        person is like in real life.
        <br /><br />
        Have fun on the Internet and be safe by following our top chat tips:
      </p>

      <div class="content_ruler" style={{margin: '10px 0'}}></div>

      <div id="chat_left">
        <p style={{color: '#900'}}>
          <b>Don't give out your personal details</b><br />
          Never tell anyone your home address, telephone number, email
          address or mobile phone number.<br /><br />

          <b>Don't meet in real life</b><br />
          If you really have to meet always take a parent or adult friend with
          you and only meet in a public place.<br /><br />

          <b>Don't talk to people who make you feel uncomfortable</b><br />
          If someone says things to you that you don't like or makes you feel
          uncomfortable, just leave the site - one mouse click and you're out
          of there!<br /><br />

          <b>Don't engage in sexual activity online</b><br />
          You will be banned from responsible teenage sites for using adult
          language and pretending to have sex (often referred to as 'cyber').
          Play safe and don't take the risk of being banned.
          <br /><br /><br />
        </p>

        
      <div id="chat_two"></div>
      </div>

      <div id="chat_right">
        <p style={{color: '#060'}}>
          <b>Do tell your parents or guardians what you are doing</b><br />
          By telling them where you are hanging out online - and perhaps even showing them - you will put their minds at rest.
          <br /><br />
          <b>Do call for help if you need to</b><br />
          Alert the site's moderators and report anything that makes you uncomfortable. Some sites have a function that let you speak to a moderator instantly at anytime.
          <br /><br />
          <b>Do have fun!</b><br />
          This is the whole point after all!
          <br /><br />
        </p>
          <p style={{color: '#330'}}>
            <b>Want to know more?</b><br />
            For more tips and advice, take a look at these websites:
          </p><br />
          <p>
            <Link to="/">Internet Watch Foundation</Link><br />
            <Link to="/">www.chatdanger.com</Link><br />
            <Link to="/">www.nch.org.uk/internet</Link><br />
            <Link to="/">www.getnetwise.org</Link><br />
          </p>
      </div>
    </>
  );
}

export default Chat;