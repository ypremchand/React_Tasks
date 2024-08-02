import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <center>
            <img src="https://st2.depositphotos.com/3591429/5997/i/450/depositphotos_59977499-stock-photo-hands-holding-word-about-us.jpg" style={{ marginTop: "60px" }} />
          </center>
        </div>
        <div>
          <h3 style={{ textAlign: "center", marginTop: "60px", color: "blue" }}>What’s  film synopsis?</h3>
          <h5 style={{ textAlign: "center", marginTop: "30px" }}>
            <p>Film synopsis content typically includes a concise summary of the movie's plot, themes, and<br></br> main characters without revealing major spoilers. <br></br>It aims to give potential viewers a preview of what the film is about and entice them to watch it. </p>
          </h5>
        </div>
        <div>
          <center style={{ marginTop: "50px" }}>
            <h4 style={{ color: "blue" }}>Who You Need On Your Production Team</h4>
            <h3 style={{ color: "green", marginTop: "30px" }}>Screenwriter</h3>
            <h5>A screenwriter is a writer who creates the screenplay or script for a film or television show.<br></br> Their role involves crafting the narrative, dialogue, characters, and overall structure of the story that will be portrayed on screen. <br></br>Screenwriters often work closely with directors, producers, and sometimes other writers to develop and refine the script.<br></br>
            Key responsibilities of a screenwriter include:</h5>
            <ul>
              <li><h6>Concept Development</h6></li>
              <li><h6>Research</h6></li>
              <li><h6>Outlining</h6></li>
              <li><h6>Writing Dialogue</h6></li>
              <li><h6>Collaboration</h6></li>
              <li><h6>Revisions</h6></li>
              <li><h6>Formatting</h6></li>


            </ul>
          </center>

        </div>

        <div>
          <center style={{ marginTop: "50px" }}>
            <h3 style={{ color: "green", marginTop: "30px" }}>Director</h3>
            <h5>A film director is a key creative figure in filmmaking who is responsible for overseeing the entire filmmaking <br></br>process and translating the screenplay into a visual and auditory work of art. Directors have a significant impact <br></br>on every aspect of a film, from pre-production planning to post-production editing.<br></br> Here are the primary responsibilities and roles of a film director:</h5>
            <ul>
              <li><h6>Interpreting the Script</h6></li>
              <li><h6>Creative Vision</h6></li>
              <li><h6>Working with Cast</h6></li>
              <li><h6>Directing Performances</h6></li>
              <li><h6>Collaboration</h6></li>
              <li><h6>Shot Composition</h6></li>
              <li><h6>Post-Production</h6></li>
              <li><h6>Decision-Making</h6></li>
            </ul>
          </center>

        </div>
        <div>
          <center style={{ marginTop: "100px" }}>
            <h3 style={{ color: "green", marginTop: "70px" }}>Actors</h3>
            <h5>Actors are essential participants in filmmaking, bringing characters to life through their performances. <br></br>They play a crucial role in conveying the story, emotions, and themes of a film to the audience. <br></br>Here are key aspects of actors' roles in filmmaking:</h5>
            <ul>
              <li><h6>Character Interpretation</h6></li>
              <li><h6>Preparation</h6></li>
              <li><h6>Collaboration</h6></li>
              <li><h6>Performance</h6></li>
              <li><h6>Adaptability</h6></li>
              <li><h6>Versatility</h6></li>
              <li><h6>Impact</h6></li>
              <li><h6>Post-Production</h6></li>
            </ul>
          </center>

        </div>
        <div>
          <center>
            <h3>Movie Reviews</h3>
            <img src="https://www.stephenkingshortmovies.com/wp-content/uploads/2024/01/film-review-logo.png" style={{ width: "600px", height: "400px" }} />
          </center>
        </div>


      </Slider>
    </div>
  );
}


export default About;
