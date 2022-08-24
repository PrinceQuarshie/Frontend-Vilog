import React from "react";
import "../styles/User.scss";
// import logo from '../assets/Amalitech-Ghana.png'

function User() {
  return (
    <div className="container">
      {/* <img src="" alt="Amalitech-Ghana" className="logo" /> */}
      <div className="regform"><h1>Sign up Details</h1></div>
      <form>
        <div className="wrapper">
          <label>First Name</label>
          <input className="firstname" type="text" name="fname" id="fname" />

          <label>Last Name</label>
          <input className="lastname" type="text" name="fname" id="fname" />

          <label>Email</label>
          <input className="email" type="email" name="email" id="email" />

          <label>Phone</label>
          <input className="tel" type="tel" name="tel" id="tel" />

          <label>Company</label>
          <input className="company" type="text" name="company" id="tel" />

          <label>Host</label>
          <select className="option" id="">
            <option disabled="disabled" selected="selected">--Select Name</option>
            <option>Name 1</option>
            <option>Name 2</option>
            <option>Name 3</option>
            <option>Name 4</option>
            <option>Name 5</option>
          </select>

          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default User;
