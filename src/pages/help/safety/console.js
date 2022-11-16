import { Route, Routes, Link } from "react-router-dom";

function Console() {
  return (
    <>
        
      <h1>Keeping in touch - safely</h1>
      <div id="console_one"></div>
      <p>
        You're bound to make some great friends in the hotel and naturally
        you'll want to keep in touch. The Habbo Console lets you do this
        without ever needing to exchange any personal details, such as email
        addresses or mobile numbers.
      </p>

      <div class="content_ruler" style={{margin: '20px 0px 15px 0px'}}></div>
      <div id="console_left">
        <p>
          <b>How does the Console work?</b><br />
          Every Habbo has his or her own Console, located at the bottom of the
          screen. To send a message to another Habbo, you must first ask them to
          become your friend, by sending a Friend Request. Once this request is
          accepted, they will be added to your Friends List.
          <br /><br />
          You can send instant messages, email or SMS to your Habbo Friends using
          your Console. Instant messages are great when your mates are online, but
          when they are not signed into the hotel, email and SMS is even better!
          <br /><br />
          When sending or receiving email or SMS from the Habbo Console, all
          details remain secret. You need only give your details once when you
          register - Habbo Hotel keeps these secure and does not use them for
          any other purpose.
          <br /><br />
          The Habbo Console lets you know that someone is trying to reach you
          with a flashing '!' and a sound.
        </p>
      </div>
      <div id="console_right">
        <div id="console_two"></div>
        <p>
          <b>What if I don't want to be friends anymore?</b><br />
          If you fall out with one of your Habbo Friends for any reason, you can
          easily remove them from your Friends List. As soon as you have done this
          they will no longer be able to send you email, SMS or instant messages.
          Just think - if you had given them your email address and mobile number,
          you would have to hope that they forget or lose them!
        </p>
      </div>
    </>
  );
}

export default Console;