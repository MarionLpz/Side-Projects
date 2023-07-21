import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Compétences</h2>
              <br></br>
              <p>
                <ul>
                  <li className="li-skills"> HTML/CSS/JS</li>
                  <li className="li-skills"> ReactJS </li>
                  <li className="li-skills"> NextJS</li>
                  <li className="li-skills"> Bootstrap</li>
                  <li className="li-skills"> Express.JS</li>
                  <li className="li-skills"> NodeJS</li>
                  <li className="li-skills"> PHP</li>
                </ul>
                <br></br>
                Sur ma to-do list, il y a : Tailwinds CSS, Nuxt, VueJS, et
                pourquoi pas SvelteKit !<br></br>
                <br></br>
                Je m'intéresse à la <b>cybersécurité</b> et à protection des
                données, aux tests et au <b>software craftmanship</b> (notamment
                autour des approches TDD, BDD, DDD), aux pratiques de{" "}
                <b>clean code</b>, à la
                <b>Green IT</b> et à <b>l'accessibilité numérique</b>...
                <br></br>
                <br></br>
                ❤︎ Livre de chevet du moment : <i>"Coder proprement"</i> de
                Robert C. Martin
              </p>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                >
                <div className="item">
                <img src={meter1} alt="skill level" />
                <h5>Web Developpement</h5>
                </div>
                <div className="item">
                <img src={meter2} alt="skill level" />
                <h5>Brand identity</h5>
                </div>
                <div className="item">
                <img src={meter3} alt="skill level" />
                <h5>Aimer les chatons</h5>
                </div>
                <div className="item">
                <img src={meter1} alt="skill level" />
                <h5>Faire du paddle</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-right" src={colorSharp2} /> */}
    </section>
  );
};
