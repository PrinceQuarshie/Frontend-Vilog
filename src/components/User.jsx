import React from "react";
import "../styles/User.scss";
function User() {
  return (
    <section className="container">
      <form className="form-container">
        <img src="/" alt="" />
        <label>First Name</label>
        <input type="text" placeholder="First Name" />

        <label> Last Name</label>
        <input type="text" placeholder="Last Name" />

        <label>Email</label>
        <input type="text" placeholder="Email" />

        <label>Phone</label>
        <input type="text" placeholder="Phone" />
      </form>
    </section>
  );
}

export default User;
