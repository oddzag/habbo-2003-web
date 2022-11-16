import { NavLink, Link } from "react-router-dom";

function EmailScam() {
  return (
    <>
        <div id="scam_four"></div>
        <p style={{width: '53%'}}>
            <h1>Email scams</h1>
            It's very important that the email address you use for Habbo Hotel is one
            that only you can access. If you let someone else read your emails, then
            they could find out your Habbo password.
            <br /><br />
            It's also important that you put in a real email address when you register
            or update your Habbo ID. If you make one up, we can't send you password
            reminders and there's virtually no way we can know for sure that you are
            the real owner of your Habbo.<br /><br />
          </p>
          <p>
            <div class="content_ruler"></div>
            <h3>"Reply to this email to become a Hobba"</h3>
            The only way to apply to become a Hobba is through the <Link to="/help/contact/hobba">application form</Link> on
            www.habbohotel.com. So, never ever reply to emails that ask you for your
            password, even if they really do seem to be from the Head Hobba.
            <div class="content_ruler"></div>
            <h3>"Change your email to xxx@xxxxx.com to get loads of Credits"</h3>
            Sounds tempting doesn't it? But don't be drawn in - it's another scam. If
            you change your email address to the address the scamster Habbo tells you,
            he or she will be able to check in as your Habbo.
            <br /><br />
            How? Well, what they do is click on the 'Forgotten your password?' link and
            type your Habbo name and the email address they told you to use. Then they
            get the password reminder email telling them your password.
            <br /><br />
            Then the scammer uses this password to sign into Habbo Hotel as you.
            <div class="content_ruler"></div>
            <h3>"Do you accept this file transfer?"</h3>
            If you speak to other Habbos on MSN (which you shouldn't do), then here's
            another way they can scam you. They say that they are sending you a cool
            program - maybe it will let you do special things in the hotel.
            <br /><br />
            But, if you accept the file transfer and open the program it sends them
            the password to your hotmail account. Then they can read your emails, so
            they use the 'Forgotten your password?' link in the hotel to get your Habbo
            password.
        </p>
    </>
  );
}

export default EmailScam;