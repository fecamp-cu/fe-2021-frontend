import styled from "styled-components"
import svgImage from "../../assets/checked.svg"

const ImageSvg = styled.img`
  @media (max-width: 480px) and (min-width:300px){
    width: 150px;
    height: 150px;
    font-size: 1rem;
  }
  width: 200px;
  height: 200px;
`

const CheckSvg = () => {
  return (
      <ImageSvg  src={svgImage} alt="checked" />
  )
}
export default CheckSvg;
