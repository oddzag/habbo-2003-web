import { Link } from "react-router-dom";

function Mods() {
  return (
    <>
      <div id="moderator_one"></div>
        <h1>Hands-on moderation - the Hobbas</h1>
        <p>
          We recognise that although technical methods of moderation are very
          useful tools, there is no substitute for a human, hands-on approach.
          And this is why there are moderators - known as Hobbas - in the hotel
          at all times.
        </p>

      <div class="content_ruler" style={{margin: '60px 0 10px 0'}}></div>
      <div id="moderator_two"></div>
        <p>
          <b>Who are the Hobbas and what can they do?</b><br />
          Hobbas are recruited from Habbos who have been hanging out in the
          hotel for a long time and who have impeccable records of behaviour.
          They are people who know the hotel inside out and who like to help
          other Habbos, both when they are in trouble and when they need to find
          out something about the hotel.
          <br /><br />
          Hobbas are online 24 hours a day, seven days a week. They are supported
          by trained Habbo Ltd staff between 9am and midnight BST every day. These
          members of staff are all police vetted and experienced in moderating
          online communities.
          <br /><br />
          Hobbas can give warnings to misbehaving habbos and if not heeded,
          they can kick them out of rooms, or ban them from the hotel. Persistent
          offenders risk being banned permanently.
          <br /><br />
          Hobbas are easily identified by the stars next to their names.
          The more experienced Hobbas have gold stars.
          <br /><br />
          <b>How do I contact a Hobba?</b><br />
          To summon a Hobba at any time of the day or night, simply use the
          'Call for help' function, located in the blue question mark at the
          bottom of the screen. This sends out an instant alert to all online
          hobbas - one of whom will come to help you.
          <br /><br />
          The 'Call for help' is Habbo Hotel's '999' service - please only
          use it in emergencies. For general questions, please take a look at the <Link to="/help/faqs">FAQs</Link>.
        </p>
    </>
  );
}

export default Mods;