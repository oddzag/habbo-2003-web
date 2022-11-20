function ScamReport() {
  return (
    <>
        <p>
            <form>
                <table>
                    <td>
                        <tr>
                            <td>Habbo name: *</td>
                            <td><input type="text" size="50"></input></td>
                        </tr>
                        <tr>
                            <td>The email address you registered with: *</td>
                            <td><input type="text" size="50"></input></td>
                        </tr>
                        <tr>
                            <td>Date of birth: *</td>
                            <td><input type="text" size="50"></input></td>
                        </tr>
                        <tr>
                            <td>Have you ever bought Habbo Credits? *</td>
                            <td>
                                <select name="type">
                                    <option value="">-- please choose one --</option>
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
                            <td>Scammer's name (if known):</td>
                            <td><input type="text" size="50"></input></td>
                        </tr>
                        <tr>
                            <td style={{verticalAlign: 'top'}}>Details of the scam: *</td>
                            <td><textarea rows="8" cols="40"></textarea></td>
                        </tr>
                    </td>
                </table>
                <div class="content_ruler"></div>
                <input type="submit" value="Submit" style={{float: 'right'}}></input>
            </form>
            <br /><br />
            Fields marked with an asterisk (*) are required.
        </p>
        <style>
          {`
            tr {line-height: 18px;}
          `}
        </style>
    </>
  );
}

export default ScamReport;