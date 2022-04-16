import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import "./Privacy.css"
import remarkGfm from "remark-gfm"
import { PrivacyMD } from "./PrivacyMD"
//import markdown from "./Privacy.md";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
`

const Privacy = () => {
  return (
    <div className="privacyBG">
      <div className="privacyDetailBox">
        <Title>ข้อตกลงด้านข้อมูลส่วนบุคคลและเงื่อนไขในการสมัคร</Title>
        <ReactMarkdown children={PrivacyMD} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  )
}
export default Privacy
