import styled from "styled-components"
import InputField from "./InputField"

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  justify-content: center;
  align-content: center;
  align-items: center;
`

const Body = styled.div`
  font-size: 1rem;
  grid-column: span 4 / span 4;
  align-text: center;
`
const GridTextfieldItem = styled.div`
  grid-column: span 8 / span 8;
  border: 0px solid black;
`

const TextField: React.FC<{ title: string; placeholder: string }> = ({ title, placeholder }) => {
  return (
    <Container>
      <Body>{title}</Body>
      <GridTextfieldItem>
        <InputField placeholder={placeholder} />
      </GridTextfieldItem>
    </Container>
  )
}
export default TextField
