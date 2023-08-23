import React from "react";
import "./footer.scss";
import ams from "../../assets/ams.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Email } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <div className="footer">
      <div className="Footer-wrapper">
        <div className="heading1">
          <h4>QUICK LINK</h4>
          <a href="">
            <p className="arrow">&raquo; Admission procedure</p>
          </a>
          <a href="">
            <p className="arrow">&raquo; Why Annai?</p>
          </a>
          <a href="">
            <p className="arrow">&raquo; Brochure</p>
          </a>
          <a href="">
            <p className="arrow">&raquo; Merit Scholarship</p>
          </a>
          <a href="">
            <p className="arrow">&raquo; Vision & Mission</p>
          </a>
          <a href="">
            <p className="arrow">&raquo; Gallery</p>
          </a>
        </div>
        <div
          className="centre-div"
          style={{
            marginLeft: "3%",
          }}
        >
          <label htmlFor="">Visitors Count : </label>
          <input type="text" />
        </div>
        <div className="end-headline">
          <div className="logo-container">
            <div className="logo-class">
              <img src={ams} alt="Logo" className="logo" />
            </div>
            <div className="title-desc">
              <div className="title">
                <div className="logo-text">
                  <h1>ANNAI </h1>
                </div>

                <div className="vertical-line"></div>
                <div className="logo-txt1">
                  <p>
                    EDUCATIONAL
                    <br />
                    INSTITUTIONS
                  </p>
                </div>
              </div>
              <p className="title-word">
                QUALITY,AFFORDABLE EDUCATION FOR ALL.
              </p>
            </div>
          </div>
          <p
            style={{
              marginLeft: "28%",
              fontSize: "19px",
              fontWeight: "bold",
            }}
          >
            Salem main road, Nambipatti, Harur,
            <br /> Dharmapuri Dt, Tamilnadu. Pin: 636-903
          </p>
          <br />
          <div className="contactus">
            <div className="location">
              <a href="">
                <LocationOnIcon
                  sx={{ fontSize: 30, verticalAlign: "middle" }}
                />
                <span className="icon-text">Get Directions</span>
              </a>
            </div>
            <div className="phonenumber">
              <a href="">
                <PhoneIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
                <span className="icon-text">+91 94865 77717</span>
              </a>
            </div>
            <div className="mail">
              <a href="">
                <EmailIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
                <span className="icon-text">annaitrustdpi@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container1"
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="copyright">
          <div className="row">
            <div className="col-md-6  text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a
                href="#"
                className="border-bottom"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  justifyContent: "flex-start",
                  color: "black",
                }}
              >
                Annai College Of Education
              </a>
              , All Right Reserved.
            </div>

            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex pt-2" style={{ color: "black" }}>
                <a href="" style={{
                  fontSize:"18px",
                  fontWeight:"600"
                }}>FOLLOW US ON : </a>
                <a href="#" className="btn btn-outline-light btn-social">
                  <i
                    className="fab fa-twitter"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-social">
                  <i
                    className="fab fa-facebook-f"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-social">
                  <i
                    className="fab fa-youtube"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
                <a href="#" className="btn btn-outline-light btn-social">
                  <i
                    className="fab fa-linkedin-in"
                    style={{ fontSize: "24px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
