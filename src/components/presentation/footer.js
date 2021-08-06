import React from "react";
import { NavLink } from "react-router-dom";
const footer = () => {
  const iconstyle = {
    paddingTop:"2rem",
    
  };
  return (  
  
    <footer className="footer">
       
       <div className="icons" style={iconstyle}>
          <center>
          <a href="#"><i class="fab fa-facebook"></i ></a>
           <a href="#"><i class="fab fa-linkedin"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
          </center>
          <center><p class="company-name">
                Swaraj Routray &copy; 2021, ALL Rights Reserved
            </p></center>
        </div>
    </footer>

  );
};
export default footer;
