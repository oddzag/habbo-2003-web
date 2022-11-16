import { Route, Routes, Link } from "react-router-dom";

function Bug() {
  return (
    <>
        <div id="contact_three"></div>
        
        <p>
          <h1>Report a bug</h1>
          Are you having problems in the hotel? If something isn't working, 
          we want to know, so that we can fix it.
          <br /><br />
          But before you fill out this form, please have a read through 
          the <Link to="/help/faqs">FAQs</Link> to make sure the problem isn't something you can fix yourself.
          
        <div className="content_ruler"></div>
        <form>
            <table id="contact_form">
              <td>
                  <tr>
                      <td>Problem:</td>
                      <td>
                        <select name="type" style={{width: '200px'}}>
                              <option value="">Click on the arrows to choose</option>
                          </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Description of the problem:</td>
                      <td><textarea rows="5" cols="45"></textarea></td>
                  </tr>
                  <tr>
                      <td>Your browser:</td>
                      <td>
                        <select name="type" style={{width: '180px'}}>
                              <option value="">Click on the arrows to choose</option>
                        </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Your operating system:</td>                      
                      <td>
                        <select name="type" style={{width: '180px'}}>
                              <option value="">Click on the arrows to choose</option>
                        </select>
                      </td>
                  </tr>
                  <tr>
                      <td>Habbo name:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>
                  <tr>
                      <td>Your email address:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>

              </td>
            </table>
            <div class="content_ruler"></div>
            <input type="submit" value="Submit" style={{float: 'right'}}></input>
          </form>
          <br />
          Fill in all the fields in the form.
          </p>
    </>
  );
}

export default Bug;