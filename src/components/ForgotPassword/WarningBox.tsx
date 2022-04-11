import styled from "styled-components"

interface Props {
  warningText: string
  status: number
}

const Container = styled.div<Props>`
  border: 0px solid red;
  display: ${(props) => (props.warningText === "" ? "none" : "flex")};
  position: absolute;
  bottom: -34px;
  padding: 2px 1rem;
  background-color: white;
  border-radius: 8px;
  gap: 8px;
`
const Title = styled.div`
  font-size: 16px;
  color: #b33030;
`
const WarningBox: React.FC<{ warningText: string; status: number }> = ({ warningText, status }) => {
  return (
    <Container warningText={warningText} status={status}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#b33030" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <Title>{warningText}</Title>
    </Container>
  )
}
export default WarningBox
