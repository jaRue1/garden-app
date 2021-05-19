import React from "react"

function Login() {
  return (
    <div class="container">
      <div class="z-depth-3 y-depth-3 x-depth-3 grey green-text lighten-4 row">

        <div class="section">
          <i class="mdi-alert-error red-text"></i>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input
              class="validate"
              type="text"
              name="username"
              id="email"
              required
            />
            <label for="email">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col m12">
            <input
              class="validate"
              type="password"
              name="password"
              id="password"
              required
            />
            <label for="password">Password</label>
          </div>
          <label>
            <a>
              <b>Forgot Password?</b>
            </a>
          </label>
        </div>
        <br />
        <center>
          <div class="row">
            <button
              type="submit"
              name="btn_login"
              class="col  s6 btn btn-small white black-text  waves-effect z-depth-1 y-depth-1">

              Login
              
            </button>
          </div>
        </center>
      </div>
    </div>
  )
}
export default Login
