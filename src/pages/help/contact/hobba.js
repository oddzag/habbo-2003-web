function Hobba() {
  return (
    <>
        <div id="contact_four"></div>
        
        <p>
          <h1>Hobba Application</h1>
          Have you got what it takes to become a Hobba? Before you fill out the application form, make sure you can say 'yes' to all these things:
          <br /><br />
          1. I'm over 16<br />
          2. I've been coming to the hotel for at least 12 weeks<br />
          3. I've been to the hotel at least 200 times<br />
          4. I'm very well behaved and know the Habbo Way inside out<br />
          <br /><br />
          If you got full marks, fill out the form!
          <br /><br />
          Please note - all Hobbas have to have a CitizenCard. The card is free, has a cool Habbo logo on it and you'll apply automatically when you fill out this form. If you've already got one, just tick the box when we ask you. You can get a CitizenCard however old you are and wherever in the world you live. 

        <form>
            <table id="contact_form" style={{width: '90%', margin: '0 0 20px 0'}}>
              <td>
                  <tr>
                      <td>Habbo name:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>
                  <tr>
                      <td>Email address:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>
                  <tr>
                      <td>Real first name:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>
                  <tr>
                      <td>Real last name:</td>
                      <td><input type="text" size="40"></input></td>
                  </tr>
              </td>
            </table>
            <button type="button" style={{float: 'right'}}>Submit</button>
          </form>
          <br />
          Fill in all the fields in the form.
          </p>
    </>
  );
}

export default Hobba;