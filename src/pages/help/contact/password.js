function Password() {
  return (
    <>
        <div id="contact_two"></div>
        
        <p style={{width: '83%'}}>
          <h1>Forgotten your password?</h1>
          To get your password emailed to you, please tell us your Habbo name and the 
          email address you registered with. This will only work if you registered with a valid email address.
          <br /><br />
          If you think you have been scammed, please fill out a Help! I've been scammed! form instead. 

        <form>
            <table id="contact_form">
              <td>
                  <tr>
                      <td>Habbo name:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>
                  <tr>
                      <td>Email:</td>
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

export default Password;