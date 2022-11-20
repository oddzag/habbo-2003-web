import { HashLink as Link } from 'react-router-hash-link';


function Moderation() {
  return (
    <>
        <h1>Moderation</h1>
        <div id="moderation"></div>
        <div class="content_ruler"></div>
        <p style={{lineHeight: '18px'}}>
            <Link to="#1">What is a Hobba?</Link><br />
            <Link to="#2">Hobba Application</Link><br />
            <Link to="#3">Why haven't I been accepted as a Hobba?</Link><br />
            <Link to="#4">How do I contact a Hobba?</Link><br />
            <Link to="#5">How do I become a Hobba?</Link><br />
        </p>
        <div class="content_ruler"></div>
        <p>
            <h5><div id="1">What is a Hobba?</div></h5>
            Hotel moderators, or Hobbas, protect innocent Habbos and fight the
            'bad guys' - Habbos who do not stick to the hotel's Terms and Conditions.
            Hobbas are one of the many ways we ensure that the Habbo Way is upheld,
            making the hotel a great place for everyone.
            <br /><br />
            You can recognise Hobbas by their stars: Newbie Hobbas (Hobbas in training)
            have silver stars, Hobbas and Supervisor Hobbas (very experienced Hobbas)
            have gold stars.
            <br /><br />
            All Hobbas are given the Hobba Handbook, which outlines the Hobba code of
            conduct. They also receive Hobba training from their Hobba Guardians, along
            with support and guidance from Habbo Ltd staff. The Hobbas operate as a
            team and communicate via a special email group, in discussion forums, and
            in the hotel of course!
            <br /><br />
            Hobbas have several roles:
            <ul>
            <li>Discipline - if a Hobba sees a Habbo breaking the Habbo Way, he/she can use
            special Hobba commands to warn, kick out or even ban the Habbo.</li><br />
            <li>Emergency assistance - Hobbas pick up 'Calls for help' and rush to the aide
            of Habbos who need assistance.</li><br />
            <li>Reporting - Hobbas report any offensive Habbo names, missions, room names
            and descriptions, and any negative developments in the hotel to Habbo Ltd.</li><br />
            <li>Hosting - Hobbas help Habbos feel welcome, by answering their questions and
            guiding them around the hotel.</li><br />
            </ul>
            <div class="content_ruler"></div>
            <h5><div id="2">Hobba application</div></h5>
            If you think you've got what it takes to become a Hobba <Link to="/help/contact/hobba">click here to apply</Link>.
            <div class="content_ruler"></div>
            <h5><div id="3">Why haven't I been accepted as a Hobba?</div></h5>
            There are several reasons why you might have not been made into a Hobba. If
            you are a fairly new Habbo, or if you don't visit very often, you may not
            know enough about the hotel. Or perhaps you have done something in the
            hotel, which was not in keeping with the Habbo Way. But do please try
            again soon!
            <div class="content_ruler"></div>
            <h5><div id="4">How do I contact a Hobba?</div></h5>
            To summon a Hobba at any time of the day or night, simply use the
            'Call for help' function, located in the blue question mark at the bottom
            of the screen. This sends out an instant alert to all online Hobbas - one
            of whom will come to your aide.
            <br /><br />
            The 'Call for help' is Habbo Hotel's '999' service - please only use it in
            emergencies. For general questions about the hotel, feel free to approach a
            Hobba directly, whenever you see them in the hotel.
            <div class="content_ruler"></div>
            <h5><div id="5">How do I become a Hobba?</div></h5>
            It is difficult to become a Hobba - there is a strict four-stage
            application process. If you apply, you will be notified if/when you pass
            the different stages.
            <br /><br />
            Stage one - you fill in the online Hobba application form which
            automatically checks your Habbo records. It looks up things like your age
            (there's no point lying, we will find out), the number of times you've
            visited Habbo Hotel, how long you've been a Habbo, and if you've been in
            any kind of trouble in the hotel. The precise criteria are a Habbo Hotel
            secret.
            <br /><br />
            Stage two - your reputation in the hotel. Are you friendly, responsible,
            willing to help out, free from prejudices? And most importantly - do you
            know the hotel inside out?
            <br /><br />
            Stage three - Hobbas will come and interview you and carry out role play
            exercises to see if you really are Hobba material.
            <br /><br />
            Stage four - if you have passed the first three stages, you will be sent a
            Hobba offer letter that includes the Hobba Agreement. This contract allows
            us to share secret tools, commands and information with you. Once you've
            signed and returned it by post, we'll give you your Hobba badge!    
        </p>
    </>
  );
}

export default Moderation;