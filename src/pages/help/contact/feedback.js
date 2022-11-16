import { Route, Routes, Link } from "react-router-dom";

function Feedback() {
  return (
    <>
        <div id="contact_one"></div>
        <h1>Contact us</h1>
        <p style={{width: '71%'}}>
        You can use this form to send an email to us, but before you fill it out, please take a look at the <Link to ="/help/faqs">FAQs</Link> to see if your question is answered there. 
        <br /><br />
        <b>Are you emailing about any of these problems?</b>
        <br /><br />
        I've forgotten my password - <Link to="/help/contact/password">please send it to me.</Link><br />
        I've been scammed - <Link to="/help/scam/scammed">help me get my Habbo back.</Link><br />
        I've spotted a bug and want to <Link to="/help/contact/bug">tell the hotel techies about it.</Link><br />
        </p>

        <div class="content_ruler"></div>

        <p>
          <b>Fill out this form if the FAQs did not help you:</b>
        <form>
            <table id="contact_form">
              <td>
                  <tr>
                      <td>What are you writing to us about? *</td>
                      <td>
                        <select name="type" style={{width: '280px'}}>
                              <option value="">Click on the arrows to choose</option>
                              <option value="website">"Go to scam website"</option>
                              <option value="tellpassword">"Tell me your password"</option>
                              <option value="changepassword">"Change your password"</option>
                              <option value="landline">"Ring landline number"</option>
                              <option value="furni">"Give me furni"</option>
                              <option value="email">"Change your email"</option>
                              <option value="new">New type of scam</option>
                          </select>
                        </td>
                  </tr>
                  <tr>
                      <td>What's your email address? *</td>
                      <td><input type="text" size="50"></input></td>
                  </tr>
                  <tr>
                      <td>What's your Habbo called?</td>
                      <td><input type="text" size="50"></input></td>
                  </tr>
                  <tr>
                      <td style={{verticalAlign: 'top'}}>Type your message here: *</td>
                      <td><textarea rows="5" cols="45"></textarea></td>
                  </tr>
              </td>
            </table>
            <div class="content_ruler"></div>
            <input type="submit" value="Submit" style={{float: 'right'}}></input>
          </form>
          </p>
    </>
  );
}

export default Feedback;