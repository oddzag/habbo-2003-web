import { NavLink, Link } from "react-router-dom";

function ScamBusters() {
  return (
    <>
      <h1>Scam Busters</h1>
      <div id="scam_one"></div>
      <p>
        Habbo Hotel is a pretty cool place to hang out, but there are some
        meanies about. These nasty people want to steal your furni, Habbo
        Friends and more.
        <br /><br />
        By reading about how these scammers work, you can make sure you don't
        fall for their tricks. Bookmark this page to keep one step ahead.
        <br /><br />
        Scamming is against the <Link to="/help/safety">Habbo Way</Link> and the law - all scammers will be
        banned forever. Please report scammers <Link to="/help/contact/scammed">here</Link> (we won't tell them who told us).
      </p>
      <br /><br /><br />
    </>
  );
}

export default ScamBusters;