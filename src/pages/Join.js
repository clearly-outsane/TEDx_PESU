import React from "react";
import RecruitSection from "../components/RecruitSection"
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Quote from "../components/fillers/Quote";

const Join = () => {
	return (
		<div style={{ backgroundColor: "black", height: "100vh"}}>
			{/* // <div> */}
      <Container maxWidth="lg">
        <div>
          <Navbar />
        </div>
      </Container>
				<RecruitSection />
				<Quote />
      <Footer />
    </div>
	);
}

export default Join; 