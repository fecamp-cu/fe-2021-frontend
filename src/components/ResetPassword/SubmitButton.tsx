import styled from "styled-components"

const Button = styled.button`
  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 480px) {
    width: 125px;
  }
  @media (max-width: 300px) {
    width: 100px;
  }
  width: 200px;
  :hover {
    background: rgba(255, 255, 255, 0.8);
    color: rgba(190, 80, 85, 1);
  }
  border-radius: 4px;
  padding: 4px 0rem;
  background-color: white;
  color: rgba(176, 63, 70, 1);
`
const Text = styled.div`
  font-size: 1.25rem;
`
const SubmitButton = () => {
  return (
    <Button>
      <Text>ยืนยัน</Text>
    </Button>
  )
}
export default SubmitButton
