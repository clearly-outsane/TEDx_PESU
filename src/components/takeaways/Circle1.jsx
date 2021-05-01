import React from "react";
import speaker1 from "../../assets/images/speakerImages/team1/speaker1.jpg";
import speaker2 from "../../assets/images/speakerImages/team1/speaker2.jpg";
import speaker3 from "../../assets/images/speakerImages/team2/speaker1.jpeg";
import speaker4 from "../../assets/images/speakerImages/team2/speaker2.jpg";
import speaker5 from "../../assets/images/speakerImages/team3/speaker1.jpg";
import speaker6 from "../../assets/images/speakerImages/team3/speaker2.PNG";
import speaker7 from "../../assets/images/speakerImages/team4/speaker1.jpg";
import speaker8 from "../../assets/images/speakerImages/team4/speaker2.jpg";
import speaker9 from "../../assets/images/speakerImages/team5/speaker1.jpg";
import speaker10 from "../../assets/images/speakerImages/team5/speaker2.jpg";
import "./circle1.css";
import Navbar from "../Navbar";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const Circle1 = () => {
  return (
    <div style={{ background: "black" }}>
      <Container maxWidth="lg">
        <div>
          <Navbar />
        </div>
      </Container>
      <div className="takeaway-circle">
        <div className="circle1">
          <div className="content">
            <p className="table-heading">1) Protecting the oceans</p>
            <div className="imgBx">
              <div>
                <img src={speaker1} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",

                    textDecoration: "underline",
                  }}
                >
                  Marianne Manuel
                </p>
              </div>
              <div>
                <img src={speaker2} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  Puja Mitra
                </p>
              </div>
            </div>
            <div className="takeawaytext">
              <h2>
                <Link style={{ color: "red" }} to="/takeaway1">
                  click here for key takeaways
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle2">
          <div className="content">
            <p className="table-heading">
              2) Green Economy and Sustainable Development
            </p>
            <div className="imgBx">
              <div>
                <img src={speaker3} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",

                    textDecoration: "underline",
                  }}
                >
                  Dr. N.H Ravindranath
                </p>
              </div>
              <div>
                <img src={speaker4} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  Rina Singh
                </p>
              </div>
            </div>
            <div className="takeawaytext">
              <h2>
                <Link style={{ color: "red" }} to="/takeaway2">
                  click here for key takeaways
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle3">
          <div className="content">
            <p className="table-heading">
              3) Why Renewables Cannot Save The Planet
            </p>
            <div className="imgBx">
              <div>
                <img src={speaker5} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",

                    textDecoration: "underline",
                  }}
                >
                  Shubhashis Dey
                </p>
              </div>
              <div>
                <img src={speaker6} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  Yashima Jain
                </p>
              </div>
            </div>
            <div className="takeawaytext">
              <h2>
                <Link style={{ color: "red" }} to="/takeaway3">
                  click here for key takeaways
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle4">
          <div className="content">
            <p className="table-heading">
              4) How Plants and Animals Are Evolving in Cities
            </p>
            <div className="imgBx">
              <div>
                <img src={speaker7} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",

                    textDecoration: "underline",
                  }}
                >
                  Karthikeyan S
                </p>
              </div>
              <div>
                <img src={speaker8} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  Prof. Nandini Rajamani
                </p>
              </div>
            </div>
            <div className="takeawaytext">
              <h2>
                <Link style={{ color: "red" }} to="/takeaway4">
                  click here for key takeaways
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle5" style={{ overflow: "hidden" }}>
          <div className="content">
            <p className="table-heading">5) Put A Value On Nature</p>
            <div className="imgBx">
              <div>
                <img src={speaker9} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",

                    textDecoration: "underline",
                  }}
                >
                  Apurba Mitra
                </p>
              </div>
              <div>
                <img src={speaker10} />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  Pranab Mukhopadhyay
                </p>
              </div>
            </div>
            <div className="takeawaytext">
              <h2 style={{ marginBottom: "0" }}>
                <Link style={{ color: "red" }} to="/takeaway5">
                  click here for key takeaways
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle1;
