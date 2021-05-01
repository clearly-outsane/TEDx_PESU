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
              <h2>key takeaways</h2>
              <ul>
                <li>
                  With regard to Ocean Conservation, the issues that occur
                  locally in India are not greatly highlighted by mainstream
                  media. The content we rely on is far too distant from the
                  actual problem’s landscape. We should try to go as much
                  in-depth as possible ourselves, digging into these issues to
                  find the root cause of these problems.
                </li>
                <li>
                  Every door is made available with the advent of the internet,
                  it just waits to be knocked on. We have to learn to put
                  ourselves out there, and help in any way possible. People will
                  only respond if we reach out to them, if not one there are
                  hundreds of others waiting.
                </li>
                <li>
                  If there exists a problem, chances are that people are already
                  solving it, because these problems are not new. We should go
                  out in search of these innovators and utilise their support to
                  make a greater impact.
                </li>
                <li>
                  As humans, there is no hard and fast rule that we should work
                  only on one specific aspect of fulfilment at a time. We can
                  work towards our philanthropic goals while simultaneously
                  building our careers in other spheres of life.
                </li>
                <li>
                  Solving problems begins one step at a time. No matter how
                  small that initial step may be, it must be taken to begin the
                  long process of saving the environment in our own ways.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle2">
          <div className="content">
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
              <h2>key takeaways</h2>
              <ul>
                <li>
                  A green business functions in the best interests of the local
                  and global environment, one that will be resilient and will
                  thrive in the long term centring around the idea of saving our
                  planet from any further harm. Companies can make a difference
                  to climate change, irrespective of their scale of operation,
                  by implementing sustainable practices.
                </li>
                <li>
                  The slogan “small actions can make a big difference” is more
                  relevant now than ever. Making small changes in our lifestyle,
                  repudiating consumerism and accepting sustainable practices in
                  our daily life can make a colossal difference to the planet.
                </li>
                <li>
                  Major tech giants are setting up goals to go carbon neutral
                  over the next decade as a part of a larger goal outlined in
                  the Paris Climate Agreement. Governments throughout the world
                  understand the pressing existential threat posed by global
                  warming, investing significant resources and expertise to
                  switch to more sustainable and ecological models.
                </li>
                <li>
                  Nations with manufacturing prowess need to take bold
                  legislative action, invest more in research and development to
                  cut down on their emissions and promote a more sustainable
                  approach to manufacturing and energy consumption by aiming to
                  switch to greener technologies and infrastructural development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle3">
          <div className="content">
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
              <h2>key takeaways</h2>
              <ul>
                <li>
                  Currently, 4% of the electricity in the world comes from
                  nuclear sources. If this were to be scaled up to 100%, the
                  entire source of nuclear power would diminish within 10-15
                  years. In order to get inexhaustible nuclear power, we would
                  have to harness nuclear energy from the isotopes of uranium
                  and thorium in the oceans and seas.
                </li>
                <li>
                  The cost of renewable energy sources has drastically fallen
                  down from Rs25 per unit to Rs2.5 per unit proving that
                  renewable energy sources can be economically efficient.
                </li>
                <li>
                  The process of energy generation can never be achieved by a
                  single source, we always require a combination of different
                  sources to successfully generate electricity for different
                  purposes,ie, nuclear or renewable energy alone is not the
                  answer to any of the problems, we must use a combination of
                  both.
                </li>
                <li>
                  The whole point of discovering new energy sources is to go
                  from dilute to concentrated energy and to satisfy the need and
                  greed of the community. Hence, we must continue striving for
                  better ways to produce electricity and never discard any
                  possible discovery.
                </li>
                <li>
                  Transport of solar power should be made possible between
                  countries so that none of the energy goes wasted and it would
                  result in the economic benefit of all the countries
                  involved.s.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle4">
          <div className="content">
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
              <h2>key takeaways</h2>
              <ul>
                <li>
                  Evolution and change are terms that cannot be used
                  interchangeably. Evolution corresponds to modifications in
                  genes that lead to adaptations. An evolutionary adaptation may
                  be referred to as a change but not vice versa.
                </li>
                <li>
                  Many argue that the conservation of nature and wildlife is
                  more important than citification. However, a balance must be
                  maintained between both in order for development to take
                  place. Co-living is essential for a sustainable ecosystem.
                </li>
                <li>
                  Survival of the fittest and the rate of adaptation is
                  correlated. If one species is more responsive to change than
                  the others, it tends to evolve more rapidly. Not all species
                  can evolve at the same pace, which explains why the fittest
                  species survive
                </li>
                <li>
                  Food for thought: We currently live in cities where humans
                  populate most of the land and there exist only pockets of
                  green jungles. What if humans were to live in pockets of urban
                  development and the rest of the land was covered by jungles?
                </li>
                <li>
                  Some of Darwin’s quotes can be discredited as discussed in the
                  video. This gives room for many theories that hold true now to
                  be discredited in the future. However, we must not forget that
                  Darwin’s theories and ideologies have been major contributors
                  to the field of Evolutionary biology.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="takeaway-circle">
        <div className="circle5">
          <div className="content">
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
              <h2>key takeaways</h2>
              <ul>
                <li>
                  Identify the socio-economic impacts of development projects
                  and subsidise those which reap positive dividends for the
                  environment.
                </li>
                <li>
                  Interactions with rural communities, who are more empathetic
                  towards natural resource management, reinforces the importance
                  of the things we take for granted.
                </li>
                <li>
                  Nature is interconnected, a greater focus on one ecosystem may
                  lead to the downslide of another and render the systems
                  incompatible.
                </li>
                <li>
                  Equitious distribution must be ensured when an essential
                  resource, say water, is priced. It is a common property and
                  must not be overused by any individual.
                </li>
                <li>
                  There will be a time when a glass of water will be as valuable
                  as a diamond.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle1;
