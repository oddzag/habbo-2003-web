import { NavLink, Link } from "react-router-dom";

function Parents() {
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
            <h1 style={{fontSize: '14px'}}>Parent's guide to Habbo Hotel</h1>
            <div id="parents"></div>
            <p>
                <b>What is Habbo Hotel?</b><br />
                It's a virtual hotel, where teenagers can hang out and chat. Each
                person in the hotel is represented by a personalised figure called a
                Habbo. It's a bit like a computer game, but all the characters are real
                people in different places.
            </p>

            <div class="content_ruler" style={{margin: '15px 0'}}></div>

            <p>
                <b>Who's it for?</b><br />
                It's aimed at 14 to 20 year olds from the UK, but anybody can register.
                <br /><br />
                <b>Is it a safe place for my child?</b><br />
                Habbo Hotel is patrolled 24 hours a day by volunteer moderators called <Link to="/help/safety/mods">Hobbas</Link>. 
                Hobbas can be recognised by their badges. Hobbas can alert, kick
                and ban Habbos who break <Link to="/help/safety">the rules</Link>. Hobbas can be asked for help from any
                room in the hotel through the blue question mark.
                <br /><br />
                Hobbas are backed up by paid members of Habbo Ltd staff between 9am and
                midnight. These staff members are trained moderators and all are police vetted.
                <br /><br />
                Every conversation in the hotel passes through the <NavLink to="/help/safety/language">Bobba Filter</NavLink> before
                it appears on the screen. This filters out swearing, racist and sexist
                terms and other words unsuitable for children. The filter also covers
                Habbo names and missions, and room names and descriptions. The filters
                are updated on a daily basis and contain many hundreds of words and terms.
                <br /><br />
                In addition to these measures we also work hard to educate our members
                about being safe in the hotel and online in general. Along with our
                prominent <Link to="/help/safety">safety information</Link>, we produce a weekly safety
                newsletter, <NavLink to="/community/hhw_latest">HabboHood Watch</NavLink> and display 
                safety messages while Habbos are moving from room to room.
                <br /><br />
                <b>Are my child's personal details safe with Habbo Hotel?</b><br />
                We have a strict <NavLink to="/help/safety/privacy">Privacy Policy</NavLink> and will not share your child's details
                with anyone, be they fellow Habbos or companies other than Habbo Ltd.
                In addition, all Habbo Ltd staff members have been police vetted to work
                with children.
                <br /><br />
                <b>Why do you ask for my child's email address and mobile phone number?</b><br />
                One of the reasons we ask for email addresses is so that we can send
                password reminders. Habbos can choose whether they want to receive
                emails from us (such as the hotel newsletters).
                <br /><br />
                We also ask for email addresses (and mobile phone numbers) so that your
                child can use the <NavLink to="/help/safety/console">Habbo Console</NavLink> effectively. The Console lets them send
                instant messages to other Habbos in the hotel and email and text messages
                to Habbos who aren't online. We designed this tool specifically to stop
                them giving out their personal details - when emails and text messages
                are sent from the Console, email addresses or phone numbers are not
                revealed to either party. In addition, only people they have chosen
                to be on their Friends List can contact them in this way and it is very
                easy to remove someone from this list if needs be.
                <br /><br />
                <b>Does it cost anything to go to Habbo Hotel?</b><br />
                It is free to register and check into the hotel - there are many Habbos
                who enjoy the service for free. We only charge for 'extras' like gaming
                elements (diving in the swimming pools), text messaging from the Console
                and room furnishings (referred to as 'furni' by most Habbos).
                <br /><br />
                These items are paid for with Habbo Credits, the hotel's currency.
                Credits can be bought in a variety of secure ways, such as by mobile
                phone text message, cheque or money (postal) order, from a home phone*,
                and by Splash Plastic (a teen pre-pay card). To find out more about
                buying Habbo Credits, including costs, please <NavLink to="/credits">click here</NavLink>.
                <br /><br />
                <b>Can my child's Habbo Credits or 'furni' be stolen?</b><br />
                Not if your child keeps their password secret. Someone else needs to
                know their password to check into the hotel as them and take their
                'furni' or spend their Credits. Unfortunately, children are very trusting
                and can be taken in by scammers. To counteract this we 
                developed <NavLink to="/help/scam">Scam Busters</NavLink>, which provides information and advice on how to keep
                Habbo accounts secure.
                <br /><br />
                <b>How can I get further information about Habbo Hotel?</b><br />
                This guide only provides a simple outline of the hotel - more detailed
                information can be found in our <NavLink to="/help/faqs">FAQs</NavLink>. If you have a specific question
                please use our <NavLink to="/help/contact">Contact Us</NavLink> form to email us - choose 'I'm a parent' from
                the drop down menu.
            </p>
            </div>
        </div>
        <div id="main_footer"></div>
    </>
  );
}

export default Parents;