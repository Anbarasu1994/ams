import React from "react";
import "./collegeGroup.scss";
import nursing from "../../assets/nursing.png";
import pharmacy from "../../assets/pharmacy.png";
import vellamal from "../../assets/vellamal college.png";
import education from "../../assets/annai college of education.png";
import artsandscience from "../../assets/arts college.png";

function CollegeGroup() {
  return (
    <div>
      <div className="college-grp1">
        <div className="colleges-row">
          {/* College 1 */}
          <div className="college-item">
            <img
              id="clg1"
              src={artsandscience}
              alt="Arts and Science"
              className="college-logo"
              onMouseEnter={(e) => (e.target.className += " college-hover-red")}
              onMouseLeave={(e) =>
                (e.target.className = e.target.className.replace(
                  " college-hover-red",
                  ""
                ))
              }
            />
            <h3 className="college-label">ARTS & SCIENCE</h3>
          </div>

          {/* College 2 */}
          <div className="college-item">
            <img
              id="clg2"
              src={nursing}
              alt="College of Nursing"
              className="college-logo"
              onMouseEnter={(e) =>
                (e.target.className += " college-hover-white")
              }
              onMouseLeave={(e) =>
                (e.target.className = e.target.className.replace(
                  " college-hover-white",
                  ""
                ))
              }
            />
            <h3 className="college-label">NURSING</h3>
          </div>

          {/* College 3 */}
          <div className="college-item">
            <img
              id="clg3"
              src={pharmacy}
              alt="College of Pharmacy"
              className="college-logo"
              onMouseEnter={(e) =>
                (e.target.className += " college-hover-green")
              }
              onMouseLeave={(e) =>
                (e.target.className = e.target.className.replace(
                  " college-hover-green",
                  ""
                ))
              }
            />
            <h3 className="college-label">PHARMACY</h3>
          </div>
        </div>

        <div className="colleges-row">
          {/* College 4 */}
          <div className="college-item">
            <img
              id="clg4"
              src={education}
              alt="College of Education"
              className="college-logo"
              style={{
                marginLeft: "100px",
                width: "155px",
              }}
              onMouseEnter={(e) =>
                (e.target.className += " college-hover-gold")
              }
              onMouseLeave={(e) =>
                (e.target.className = e.target.className.replace(
                  " college-hover-gold",
                  ""
                ))
              }
            />
            <h3 className="college-label" 
            style={{
              marginLeft:"100px"
            }}>EDUCATION </h3>
            <p style={{
              marginLeft:"100px"
            }}>B.Ed , M.Ed</p>
          </div>

          {/* College 5 */}
          <div className="college-item">
            <img
              id="clg5"
              src={vellamal}
              alt="Vellamal College of Education"
              className="college-logo"
              style={{
                // marginLeft: "8%",
              }}
              onMouseEnter={(e) =>
                (e.target.className += " college-hover-blue")
              }
              onMouseLeave={(e) =>
                (e.target.className = e.target.className.replace(
                  " college-hover-blue",
                  ""
                ))
              }
            />
            <h3 className="college-label" style={{
              marginLeft:"-20%"
            }}>VELLAMAL EDUCATION</h3>
            <p style={{
              marginLeft:"-32%"
            }}>B.Ed </p>

          </div>
          {/* College 6 */}
          <div className="college-item">
            <img
              id="clg6"
              src={vellamal}
              alt="Hotel Management"
              className="college-logo"
              style={
                {
                  // marginLeft:"8%"
                }
              }
              onMouseEnter={(e) =>
                (e.target.className += " college-hover-blue")
              }
              onMouseLeave={(e) =>
                (e.target.className = e.target.className.replace(
                  " college-hover-blue",
                  ""
                ))
              }
            />
            <h3 className="college-label"  style={{
              marginLeft:"-70%"
            }}>HOTEL MANAGEMENT</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeGroup;
