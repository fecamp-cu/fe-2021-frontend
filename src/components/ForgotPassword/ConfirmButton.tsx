import { MouseEventHandler, useEffect, useState } from "react"
import styled from "styled-components"

const Button = styled.button`
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 250px;
  }
  @media (max-width: 320px) {
    width: 200px;
  }

  width: 300px;
  color: #d1555d;
  background-color: white;
  :hover {
    background: rgba(255, 255, 255, 0.8);
  }
  border-radius: 4px;
  padding: 8px;
`
const Text = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1rem;
  }
  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
  font-size: 1.25rem;
`
const ConfirmButton: React.FC<{
  text: string
  handleOnClick: MouseEventHandler<HTMLButtonElement>
}> = ({ text, handleOnClick }) => {
  const [isClick, setIsClick] = useState<boolean>(false)
  const [countDown, setCountDown] = useState<number>(10)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountDown((prevValue) => prevValue - 1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <Button onClick={handleOnClick}>
      <Text>{text}</Text>
    </Button>
  )
}
export default ConfirmButton
