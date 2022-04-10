import { memo } from "react"
import styled from "styled-components"
import CancelButton from "./CancelButton"
import SubmitButton from "./SubmitButton"
const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 2rem;
`

const ButtonGroup: React.FC<{ canSubmit: boolean; handleOnSubmit: () => Promise<{ status: number; errorText: string }> }> = ({
  canSubmit,
  handleOnSubmit,
}) => {
  return (
    <Container>
      <CancelButton />
      <SubmitButton disabled={!canSubmit} handleOnSubmit={handleOnSubmit} />
    </Container>
  )
}
export default memo(ButtonGroup)
