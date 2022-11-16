import { Route, Routes, Link } from "react-router-dom"

function Safe() {
  return (
    <>
      <div id="safe_one"></div>
      <h1>Staying safe in the hotel</h1>
      <p style={{width: '52%'}}>
        <b>Keeping in touch safely</b><br />
        The Habbo Console lets you keep in touch with your Habbo Friends through
        instant messages, email and SMS - all without revealing your email address
        or mobile phone number. You'll need to send your friends a Friend Request
        before they appear on your Console, and they have to accept the request.
        Find out more about the <Link to="/help/safety/console">Habbo Console here</Link>.
      </p>
      <div class="sub_content_ruler"></div>
      <div id="safe_two"></div>
      <p style={{width: '52%'}}>
        <b>The hotel moderators</b><br />
        The hotel is patrolled by friendly moderators called <Link to="/help/safety/mods">Hobbas.</Link>. Hobbas have
        special badges next to their names and can alert, kick and ban Habbos who
        break the <Link to="/help/safety">Habbo Way</Link>. The Hobbas help the Hotel Staff (they've got 'staff'
        badges) keep the hotel a safe and fun place to hang out.
      </p>
      <div class="sub_content_ruler"></div>
      <div id="safe_three"></div>
      <p style={{width: '52%'}}>
        <b>Getting help</b><br />
        If you have a question about the hotel, the best thing to do is check out
        the <Link to="/help/faqs">FAQs</Link>. But if you are worried about something - maybe you've just seen
        someone break the <Link to="/help/safety">Habbo Way</Link> - you can call for help, by clicking on the
        blue question mark in the bottom right corner of your screen.
      </p>
      <div class="sub_content_ruler"></div>
      <p><Link to="/help/tour/news" style={{fontWeight: 'bold'}}>Getting the latest news {">"}</Link></p>
    </>
  );
}

export default Safe;