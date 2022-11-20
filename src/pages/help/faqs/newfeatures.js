import { HashLink as Link } from 'react-router-hash-link';


function NewFeatures() {
  return (
    <>
        <h1>New features</h1>
        <p style={{lineHeight: '18px'}}>
            <Link to="#1">Why isn't there any music in the hotel?</Link><br />
            <Link to="#2">How do I join Habbo Club?</Link><br />
            <Link to="#3">How much does Habbo Club cost?</Link><br />
            <Link to="#4">How do I get the special Habbo Club clothes, furni and room layouts?</Link><br />
            <Link to="#5">How do I know how many days I have left in my Habbo Club membership?</Link><br />
            <Link to="#6">I've seen someone with an HC badge - what does that mean?</Link><br />
            <Link to="#7">Can I buy my friend Habbo Club membership as a present?</Link><br />
            <Link to="#8">I want to leave Habbo Club, can I get my Credits back?</Link><br />
            <Link to="#9">If I extend my Habbo Club membership, will I get another green sofa?</Link><br />
            <Link to="#10">If I join Habbo Club in the middle of the month, will I just get half a month's membership?</Link><br />
            <Link to="#11">If I decide not to extend my Habbo Club membership, do I get to keep my exclusive clothes and room layouts?</Link><br />
        </p>
        <div class="content_ruler"></div>
        <p>
            <h5><div id="1">Why isn't there any music in the hotel?</div></h5>
            Habbo is committed to providing everyone with the best user experience possible over a standard internet connection. As the hotel is very rich in graphics, there is a risk that music could compromise this experience for those who do not have extremely fast internet connections. We are working on ways to optimise the hotel so that we can stream music and we will make it available as soon as we can.
            <div class="content_ruler"></div>
            <h5><div id="2">How do I join Habbo Club?</div></h5>
            Click on the HC icon next to the Hotel Navigator.
            <div class="content_ruler"></div>
            <h5><div id="3">How much does Habbo Club cost?</div></h5>
            It costs 25 Credits a month to be a member of Habbo Club.
            <div class="content_ruler"></div>
            <h5><div id="4">How do I get the special Habbo Club clothes, furni and room layouts?</div></h5>
            Look in your Hand - within 3 days after you join the club, you'll have an
            special green sofa in there that only Habbo Club members can get. After
            Christmas we'll add some more HC furni to the Habbo Club Catalogue section.
            <br /><br />
            To get your cool clothes, hair, and hats etc, go to 'Update my Habbo ID'
            and scroll through the options - you'll see the Habbo Club stuff there.
            <br /><br />
            To get the special room layouts, make a new guest room and you'll see the
            Habbo Club options in the Room-O-Matic.
            <div class="content_ruler"></div>
            <h5><div id="5">How do I know how many days I have left in my Habbo Club membership?</div></h5>
            Go to Hotel View and look under the Habbo Club icon - the number of days
            you have left is shown there. But don't worry - we'll send you a reminder
            email before it runs out!
            <div class="content_ruler"></div>
            <h5><div id="6">I've seen someone with an HC badge - what does that mean?</div></h5>
            It means that they're a member of Habbo Club. To find out more about it,
            open the Catalogue (go to a guest room to find one) and read the Habbo Club
            section.
            <div class="content_ruler"></div>
            <h5><div id="7">Can I buy my friend Habbo Club membership as a present?</div></h5>
            Sorry, but not at the moment.
            <div class="content_ruler"></div>
            <h5><div id="8">I want to leave Habbo Club, can I get my Credits back?</div></h5>
            Membership is paid on a monthly basis, so we cannot give a refund on days
            you don't want.
            <div class="content_ruler"></div>
            <h5><div id="9">If I extend my Habbo Club membership, will I get another green sofa?</div></h5>
            No, you only get that exclusive green sofa once and that is when you join
            the Habbo Club for the first time within the first month. One green sofa
            per Habbo.
            <br /><br />
            However we will be giving away other exclusive items to Habbo Club members
            so it is worth staying in the Club.
            <div class="content_ruler"></div>
            <h5><div id="10">If I join Habbo Club in the middle of the month, will I just get half a month's membership?</div></h5>
            No! You will always get a full month's membership from whatever date you
            join. There are 31 days in most months of the year so each month, your
            Habbo Club membership lasts for 31 days (the first day being the day you
            join).
            <br /><br />
            For example, if you join on the 28th December - you membership will last
            until 27th January. That way you always get value-for-money with Habbo Club
            <div class="content_ruler"></div>
            <h5><div id="11">If I decide not to extend my Habbo Club membership, do I get to keep my exclusive clothes and room layouts?</div></h5>
            If you decide to leave Habbo Club, you won't be able to keep your cool
            clothes, hair styles or colours or your HC badge. You will keep whatever
            rooms you've already made with the exclusive room layouts and any furni
            you've got (including the green sofa!).
        </p>
    </>
  );
}

export default NewFeatures;