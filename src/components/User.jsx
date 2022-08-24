import React from "react";
import "../styles/User.scss";
// import logo from '../assets/Amalitech-Ghana.png'

function User() {
  return (
    <body>
      <div className="container">
        <div className="title">Fill Form</div>
        <form>
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input type="text" placeholder="Enter your last name" />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>

            <div className="input-box">
              <span className="details">Phone</span>
              <input type="text" placeholder="Enter your number" />
            </div>
            <div className="input-box">
              <span className="details">Comapny</span>
              <input type="text" placeholder="Enter company name" />
            </div>
            <div className="input-box">
              <span className="details">Host</span>
              <select className="option" id="">
                <option disabled="disabled" selected="selected">
                  --Select Host Name
                </option>
                <option>Name 1</option>
                <option>Name 2</option>
                <option>Name 3</option>
                <option>Name 4</option>
                <option>Name 5</option>
              </select>
            </div>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </body>
  );
}

export default User;
{
  /* <div className="wrapper">
          <label className="firstlabel">First Name</label>
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

          <input type="submit" value="submit" /> */
}
