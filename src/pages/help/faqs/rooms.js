import { Route, Routes, NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


function Rooms() {
  return (
    <>
        <h1>Moderation</h1>
        <div id="rooms"></div>
        <div class="content_ruler"></div>
        <p style={{lineHeight: '18px'}}>
            <Link to="#1">How do I get a guest room?</Link><br />
            <Link to="#2">What rules are there in guest rooms?</Link><br />
            <Link to="#3">I've seen some stuff in people's rooms that's not in the catalogue - how do I get it?</Link><br />
            <Link to="#4">How do I trade furniture?</Link><br />
            <Link to="#5">What is the giant hand for?</Link><br />
            <Link to="#6">I've bought furniture, but it's not in my hand. Where is it?</Link><br />
            <Link to="#7">Where are the items I bought from the Catalogue?</Link><br />
            <Link to="#8">Where do I get Stickie notes from?</Link><br />
            <Link to="#9">How does the holo-dice work?</Link><br />
            <Link to="#10">Why can't I see new items in the Catalogue, when other Habbos can?</Link><br />
            <Link to="#11">How can I delete my room?</Link><br />
            <Link to="#12">How do I get a job?</Link><br />
            <Link to="#13">Why don't my teleports work?</Link><br />
            <Link to="#14">Why can't I open my present?</Link><br />
            <Link to="#15">How do I open a present?</Link><br />
            <Link to="#16">Why can't I pick up my wallpaper or floor?</Link><br />
        </p>
        <div class="content_ruler"></div>
        <p>
            <h5><div id="1">How do I get a guest room?</div></h5>
            You need to go to a Room-O-Matic to get your own room. You can find these
            on the Hotel Navigator, under the list of rooms or in Lobbies and Cafe Ole.
            <br /><br />
            Just follow the instructions that pop up when you click on one, or when you
            click the link in the Hotel Navigator. All rooms are free at Habbo Hotel.
            <div class="content_ruler"></div>
            <h5><div id="2">What rules are there in guest rooms?</div></h5>
            The Habbo Way applies in all rooms in the hotel, but you should treat the
            guest rooms like someone else's home.
            <div class="content_ruler"></div>
            <h5><div id="3">I've seen some stuff in people's rooms that's not in the catalogue - how do I get it?</div></h5>
            Some of the furniture and clothing you see is being tested and is not
            available yet. This is because we want to make sure that everything we
            sell is of the highest quality. The catalogue is updated regularly, so
            keep an eye out!
            <div class="content_ruler"></div>
            <h5><div id="4">How do I trade furniture?</div></h5>
            We have introduced a secure trading system, so that you can trade items
            without fear of them being stolen. To trade with another Habbo just drag
            an item on top of them and the trading window will open - you'll see what
            to do after that.
            <div class="content_ruler"></div>
            <h5><div id="5">What is the giant hand for?</div></h5>
            When you have bought items from the catalogue, we 'hand deliver' them to
            your room. You can select the furniture from the giant hand and drag it to
            the room. Click on the hand to close it.
            <div class="content_ruler"></div>
            <h5><div id="6">I've bought furniture, but it's not in my hand. Where is it?</div></h5>
            The things you bought are actually there, but you just can't see them!
            This is due to a small technical glitch that we're working to fix. If you
            leave the room and return, it will appear. Please let us know if it doesn't.
            <div class="content_ruler"></div>
            <h5><div id="7">Where are the items I bought from the Catalogue?</div></h5>
            When you have bought items from the Catalogue they will be 'hand-delivered'
            to you in the giant hand that appears on the right-hand side of the screen.
            To put the furniture into your room, simply drag the item from the hand to
            the place you want to put it in your room. To move your furniture around
            the room, just click on the item and options will appear on the right-hand
            side of the screen.
            <div class="content_ruler"></div>
            <h5><div id="8">Where do I get Stickie notes from?</div></h5>
            Stickie notes are available from the Catalogue - you can find a copy in
            every private rooms. A whole pad costs just 3 Habbo Credits and you can put
            Stickies in any private room. Sometimes other Habbos leave blank ones for
            you to leave messages on too.
            <div class="content_ruler"></div>
            <h5><div id="9">How does the holo-dice work?</div></h5>
            You need to be standing next to the holo-dice to operate it - this is so
            that meanies can't spoil dice-based games. :)
            <br /><br />
            To turn the holo-dice on, click on the bottom. To 'spin' the dice, double
            click on the dome (the top).
            <div class="content_ruler"></div>
            <h5><div id="10">Why can't I see new items in the Catalogue, when other Habbos can?</div></h5>
            Are you using AOL to access Habbo Hotel? If you are, this is probably why
            you can't see the new stuff. AOL remotely caches website pages and so what
            you are seeing is not the latest version of Habbo Hotel.
            <br /><br />
            To avoid this, use AOL to get a connection to the internet and then use a
            different browser, such as Netscape or Explorer to load the hotel.
            <div class="content_ruler"></div>
            <h5><div id="11">How can I delete my room?</div></h5>
            If you want to delete your room deleted, you need to go to Hotel Navigator
            and under 'Popular rooms' (within Guest Rooms), select 'Own Rooms'. Click
            on the name of the room you want to delete and then at the bottom of the
            navigator. click on modify. At the bottom of that page, select delete and
            follow instructions from there.
            <br /><br />
            Make sure you have picked up all your furni or that will get deleted too!
            <div class="content_ruler"></div>
            <h5><div id="12">How do I get a job?</div></h5>
            Some Habbos let other Habbos 'work' in their guest rooms. If you want a job,
            you should go to different rooms and ask the owner's if they need staff.
            <br /><br />
            You should never pay to get a job and don't expect to get paid in return.
            Some meanie Habbos say they will pay and don't. :(
            <div class="content_ruler"></div>
            <h5><div id="13">Why don't my teleports work?</div></h5>
            Every teleport is one of a pair, so you need to keep track of which
            wardrobe, portaloo or phone box goes with which.
            <br /><br />
            If you received your teleports in a trade, it may be that the Habbo that
            traded with you has not given you matching teleports.
            <div class="content_ruler"></div>
            <h5><div id="14">Why can't I open my present?</div></h5>
            If someone gave you a present in a trade, you won't be able to open it.
            Only the person the present was bought for can open it.
            <div class="content_ruler"></div>
            <h5><div id="15">How do I open a present?</div></h5>
            If you have a present in your hand, put it in a Guest room, preferably
            your own room, and double click on it. This will put the opened present in
            your hand - you can then place the opened present in your room.
            <div class="content_ruler"></div>
            <h5><div id="16">Why can't I pick up my wallpaper or floor?</div></h5>
            Because it's stuck down! If you are thinking about making a new room, don't
            delete the room and lose the wallpaper and floor - just rename it.   
        </p>
    </>
  );
}

export default Rooms;