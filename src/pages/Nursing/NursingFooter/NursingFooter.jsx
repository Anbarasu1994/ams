import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./NursingFooter.scss"
function NursingFooter() {
  return (
    <div className="NursingFoot">
      <div className="list-container">
        <div className="list-1">
          <h3>Quick Links</h3>
          <h4>About us</h4>
          <h4>Carrier</h4>
          <h4>FAQ & HELP</h4>
          <h4>Blog</h4>
        </div>
        <div className="list-2">
          <h2>Subscribe Here</h2>
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button type="submit">Subscribe</button>
          </div>
        </div>
        <div className="list-3">
          <h3>Get in Touch</h3>
          <div className="address">
            <h4>
              <LocationOnIcon
                sx={{
                  fontSize: 30,
                  verticalAlign: "middle",
                  marginRight: "10px",
                }}
              />
            </h4>
            <p>
              NH 179A, Nambipatti,
              <br />
              H.Doddampatti Post,
              <br />
              Harur, Tamil Nadu 636903
            </p>
          </div>
          <h4 id="ad">
            <PhoneIcon
              sx={{
                fontSize: 30,
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            08056344299
          </h4>
          <h4 id="ad">
            <EmailIcon
              sx={{
                fontSize: 30,
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            annaicollege@gmail.com
          </h4>
        </div>
      </div>
      <div className="socia1-link">
        <div className="follow">
          <h4>FOLLOW US ON</h4>
        </div>
        <div className="Links" >
          <FacebookRoundedIcon
            sx={{
              fontSize: 25,
              verticalAlign: "middle",
              marginRight: "10px",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: 25,
              verticalAlign: "middle",
              marginRight: "10px",
            //   color: "dark pink",
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: 25,
              verticalAlign: "middle",
              marginRight: "10px",
            //   color: "sky blue",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NursingFooter;
