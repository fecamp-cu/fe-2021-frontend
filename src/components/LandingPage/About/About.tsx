import "./About.css"

function About(props : { post : string } ) {

  return (
    <div id="about-landingPage-content">
      <h1 className="topic-text">FECamp คืออะไร</h1>
      <p className="about-text"> {props.post}</p>
    </div>
  )
}

export default About
