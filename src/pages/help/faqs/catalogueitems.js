import { HashLink as Link } from 'react-router-hash-link';


function Catalogue() {
  return (
    <>
        <h1>Catalogue Items</h1>
        <p style={{lineHeight: '18px'}}>
            <Link to="#1">Where can I get the throne, Russian samovar or holopod?</Link><br />
            <Link to="#2">Where can I get the green sofa?</Link><br />
        </p>
        <div class="content_ruler"></div>
        <p>
            <h5><div id="1">Where can I get the throne, Russian samovar or holopod?</div></h5>
            These three items were given out by the Hotel Manager on May 28 2002 to all
            the Habbos who were registered to Habbo Hotel at the time and came back
            before July 31 2002. This was to celebrate her birthday. The Habbos also
            got 5 Habbo Credits.
            <br /><br />
            The items are not available in the Catalogue. They will not be deleted ever.
            <br /><br />
            If you made your Habbo on or after May 28, you will not have received
            these gifts. Sorry.
            <div id="content_ruler"></div>
            <h5><div id="2">Where can I get the green sofa?</div></h5>
            The green sofa is a special piece of furni for Habbo Club members only.
            To join, see your Catalogue for details.
        </p>
    </>
  );
}

export default Catalogue;