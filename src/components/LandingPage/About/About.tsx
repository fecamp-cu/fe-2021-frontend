import { useEffect, useState } from "react";
import { landingPageInstance } from "../../../utils/client"
import "./About.css"

function About() {

  const [post, setPost] = useState(""); 

  useEffect(() => {
    landingPageInstance.getActiveSetting().then((res) => {
      setPost(res?.data.aboutFeContainers[0].text)
    })
  })

  return (
    <div id="about-landingPage-content">
      <h1 className="topic-text">FECamp คืออะไร</h1>
      <p className="about-text"> {post}</p>
    </div>
  )
}

export default About
