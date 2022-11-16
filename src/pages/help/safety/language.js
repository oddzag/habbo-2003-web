import { Link } from "react-router-dom";

function Language() {
  return (
    <>
      <div id="language_two"></div>
      <h1>Keeping an eye on bad language</h1>

      <div id="language_one" style={{margin: '0px 10px 0px 10px'}}></div>
      <p>
        While we want all the hotel guests to enjoy themselves and talk about whatever they want, there are some topics of conversation and words that may cause offence to others. For this reason Habbo Hotel uses a technical filter that replaces certain words and phrases with the word 'bobba' - the Bobba Filter.
        <br /><br />
        <b>Which parts of the hotel are filtered?</b><br />
        The Bobba Filter is turned on in areas of the hotel, even in the Habbos' own rooms (guest rooms).
        <br /><br />
        The filter covers general conversation, Habbo names and missions,
        guest room names and descriptions, Stickie notes, gift tags, and
        all messages sent using the Habbo Console.
        <br /><br />
        <b>What sort of language is filtered?</b><br />
        Anything that goes against the <Link to="/help/safety" end>Habbo Way</Link> - this includes swearing, racism
        and explicit sexual comments. The Bobba Filter is constantly updated -
        sometimes several times a day - with new words and terms.
        <br /><br />
        We constantly make additions to and improve both our technical and human
        systems, but it you see something that offends you, please <Link to="/help/contact">email us</Link> straightaway.
      </p>
    </>
  );
}

export default Language;