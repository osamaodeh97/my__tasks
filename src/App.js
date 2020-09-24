import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <h2 className="form-sign">Login page</h2>

      <div className="form-login">

        <form>

          <br /><label><b>User Name</b>
          </label>
          <input type="text" name="Uname" id="Uname" placeholder="Username" />
          <br /><br />
          <label><b>Password
        </b>
          </label>
          <input type="Password" name="Pass" id="Pass" placeholder="Password" />
          <br /><br />
          <input type="button" name="log" id="log" value="Log In Here" />
          <br /><br />
          <input type="checkbox" id="check" />
          <span>Remember me</span>
          <br /><br />
          Forgot<a href="#">Password</a>

        </form>
      </div>
    </div>

  );
}

export default App;