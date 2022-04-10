import styled from "styled-components"
import svgImage from "../../assets/email.svg"

const StyleImage = styled.img`
  @media (max-width: 480px) and (min-width:300px){
    width: 150px;
    height: 150px;
    font-size: 1rem;
  }
  width: 200px;
  height: 200px;
`

const EmailSvg = () => {
  return (
      <StyleImage src={svgImage} alt="confirm email" />
  )
}
export default EmailSvg
