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
    background: linear-gradient(98.4deg, rgba(255, 255, 255, 0.2) 10.21%, rgba(208, 208, 208, 0.3) 90.92%);
  }
  border-radius: 4px;
  padding: 4px 0rem;
`
const Text = styled.div`
  font-size: 1.25rem;
`
const CancelButton = () => {
  return (
    <Button>
      <Text>ยกเลิก</Text>
    </Button>
  )
}
export default CancelButton
