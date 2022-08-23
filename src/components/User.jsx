import React from "react";
import "../styles/User.scss";
function User() {
  return (
    <div className="container">
        <img src="/" alt="" />
      <form>
         <div className="wrapper">
           <div className="box">
            <input type="text" name="fname" id="fname"/>
            <label>First Name</label> 
           </div>

           <div className="box">
            <input type="text" name="fname" id="fname"/>
            <label>Last Name</label> 
           </div>

           <div className="box">
            <input type="email" name="email" id="email"/>
            <label>Email</label> 
           </div>

           <div className="box">
            <input type="tel" name="tel" id="tel"/>
            <label>Phone</label> 
           </div>

         <input type="submit" value="submit"/>

         </div>

      </form>
    </div>
  );
}

export default User;
