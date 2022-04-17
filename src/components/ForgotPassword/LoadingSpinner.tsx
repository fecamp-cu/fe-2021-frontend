import styled from "styled-components"
import "./LoadingSpinner.css"

const Container = styled.div`
  border: px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  opacity: 0.8;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  position: fixed;
`
const Title = styled.div`
  font-size: 20px;
`

const Box = styled.div<{ isLoading: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  justify-content:center;
  align-items:center;
  overflow:hidden;
`

const LoadingSpinner: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Box isLoading={isLoading}>
      <Container>
        <Title>รอโหลดสักครู่</Title>
        <div className="lds-dual-ring"></div>
      </Container>
    </Box>
  )
}
export default LoadingSpinner
