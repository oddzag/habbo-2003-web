import { NavLink, Link } from "react-router-dom";

function Privacy() {
  return (
    <>
      <h1 style={{fontSize: '14px', paddingBottom: '20px'}}>Privacy Policy</h1>

        <p>
        Here at Habbo Hotel we want everyone to have a good time, and we promise
        to keep your hotel as secure and as private as we can. The hotel is a
        place for you to hang out in and meet new people. We have a <Link to="/help/safety">few rules</Link> that
        you do need to accept before you can become a member, and you need to read
        the Privacy Policy all the way through before you can join. By clicking
        the 'accept' button when you register you are agreeing to us holding and
        processing your personal information.
        <br /><br />
        If you are under 14 we think you should check with your parents or
        guardians that they are happy for you to be a member of Habbo Hotel.
        Please get them to explain any areas of this statement you may not fully
        understand.
        <br /><br />
        If you have any concerns regarding your personal information, website
        content, or any queries with regard to Habbo Hotel practices please <NavLink to="/help/contact">email us</NavLink>.
        <br /><br />
        <b>YOUR CONSENT</b><br />
        The Internet is a global environment and involves the transmission of
        data on an international basis. By using our Website you consent to the
        collection and use of your information as described in this Privacy
        Policy. Any changes to this policy will be reflected here.
        <br /><br />
        <b>PERSONAL INFORMATION</b><br />
        We collect personal information from you when you visit our Website. This
        is collected through the use of online forms and your emails. We also
        collect information automatically about your visit to our Website.
        <br /><br />
        <br /><b>PURPOSES OF COLLECTION</b><br />
        We process personal information about you for the purposes of:
        <br /><br />
        * Understanding your needs and improving our offering of information,
        products and services to you, such as special discounts and deals.<br />
        * Enabling you to send your Habbo Friends emails and SMS without them
        knowing your contact details.<br />
        * Administering your account with us and letting you know about things
        we are doing that might affect you (eg changes to Habbo Ltd's procedures,
        changes to the <Link to="/help/safety/terms">Terms and Conditions</Link>, etc).<br />
        * Carrying out research (ie scientific, social, economic and market).<br />
        * Maintaining information as a reference tool or general resource.<br />
        * Providing you with personalised information about products and services.
        <br /><br />
        <b>CHAT ROOMS AND MESSAGE BOARDS</b><br />
        We make chat facilities and message boards available to you. Please
        remember that any information you choose to disclose in these areas may
        become public information. We would encourage you to exercise caution when
        deciding to disclose information, and be careful what you reveal to people
        you don't yet know. Please refer to our <Link to="/help/safety/terms">Terms and Conditions</Link>.
        <br /><br />
        <b>ACCESS, UPDATE OR CORRECT YOUR INFORMATION</b><br />
        If you do not wish to receive Habbo Hotel Happenings or HabboHood Watch
        (the hotel's two newsletters), or information about products and services
        supplied by Habbo Ltd or third parties, do not tick the boxes at the
        bottom of the registration form. You may change these options anytime
        by selecting the 'Update your Habbo ID' link on our home page.
        <br /><br />
        Alternatively, you may opt out by <NavLink to="/help/contact">emailing us</NavLink>.
        <br /><br />
        <b>SECURITY</b><br />
        All information you provide us with, and all information contained in your
        account, is encrypted. This coding lets your browser automatically encrypt
        or scramble data before you send it to us. Transactions will not be
        permitted if your browser does not accept the encryption. Only authorised
        personnel of Habbo Ltd or its partners can decode this information and
        such personnel will only do so in accordance with our, or their, privacy
        policy. We employ this facility to ensure that all information we receive
        from you is in a secure environment at all times.
        <br /><br />
        <b>CHILDREN</b><br />
        Habbo Hotel is not intended for use by children, especially those under
        the age of 14. No one under the age of 14 is allowed to provide any
        personal information or to use our public discussion areas without
        parental consent.
        <br /><br />
        If your children disclose information about themselves in our public
        discussion areas, they may get unsolicited messages from other parties.
        Accordingly, it is up to you to ensure they abide by our <Link to="/help/safety/terms">Terms and Conditions</Link>.
        <br /><br />
        If you're worried about your children's activities or their privacy on
        our sites, we encourage you to <NavLink to="/help/contact">email us</NavLink>.
        <br /><br />
        <b>COOKIES</b><br />
        A cookie is a small piece of information sent by web server to a web
        browser, which enables the server to collect information from the browser.
        <br /><br />
        We use cookies to identify you when you visit us and to keep track of
        where you go so we can build up a demographic profile and learn about
        what suits you.
        <br /><br />
        Our use of cookies also allows the registered users to be presented with
        a personalised version of the Website and have access to information to
        their account.
        <br /><br />
        <b>DISCLOSURES</b><br />
        We will not sell, share, or rent your information to others except as set
        out in this Privacy Policy.
        <br /><br />
        * We will only disclose personal information to other companies within
        our group of companies, business partners, purchasers of our business
        and suppliers we engage to process data on our behalf. We may also disclose
        this information to a Licensed Credit Reference Agency.<br />
        * The business partners, strategic partners, purchasers of our business
        and suppliers may gather information for their own purposes and for that
        reason we cannot exercise control over the uses to which they apply your
        personal information. It is, however, our belief that when we supply your
        details to them, they will keep your details secure and not pass them on
        to third parties and only use your details to market their own products
        to you.<br />
        * In the event of the sale of the Company or its assets your personal
        details may be disclosed to the purchaser of the Company or the purchaser
        of its assets.<br />
        <br /><br />
        <b>LINKS TO THIRD PARTIES</b><br />
        Please be aware our Website may have advertisements and links to websites
        and services that may collect personal information about you. This
        Privacy Policy does not cover the practices and policies of these
        third parties. We encourage you to read the policies of all sites you
        use, as their policies may be materially different from ours.
        </p>
    </>
  );
}

export default Privacy;