import styled from "styled-components"
import CancelButton from "./CancelButton"
import SubmitButton from "./SubmitButton"
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom:2rem;
`

const ButtonGroup = () => {
  return (
    <Container>
      <CancelButton />
      <SubmitButton />
    </Container>
  )
}
export default ButtonGroup
