import { useEffect, useState } from "react";
import { landingPageInstance } from "../../../utils/client"
import "./About.css"

function About() {

  const [title, setTitle] = useState("");
  const [post, setPost] = useState(""); 

  useEffect(() => {
    landingPageInstance.getAboutFE().then((res) => {
      setTitle(res?.data.title)
      setPost(res?.data.aboutFeContainers[0].text)
    })
  })

  return (
    <div id="about-landingPage-content">
      <h1 className="topic-text">{title}</h1>
      <p className="about-text"> {post}</p>
    </div>
  )
}

export default About
