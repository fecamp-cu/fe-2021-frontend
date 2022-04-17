import { MouseEventHandler, useEffect, useState, MouseEvent,memo } from "react"
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
  :disabled{
    background-color: rgba(255,255,255,0.5);
    :hover{
      background-color: rgba(255,255,255,0.5);
    }
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
const TimerConfirmButton: React.FC<{
  textBeforeClick: string
  handleOnSubmit: MouseEventHandler<HTMLButtonElement>
  textAfterClick: string
}> = ({ textBeforeClick, textAfterClick, handleOnSubmit }) => {
  const [isClick, setIsClick] = useState<boolean>(false)
  const [countDown, setCountDown] = useState<number>(30)
  const handleOnConfirm = (event: MouseEvent<HTMLButtonElement>) => {
    handleOnSubmit(event)
    setIsClick(true)
  }
  useEffect(() => {
    if (isClick && countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown((prevValue) => prevValue - 1)
      }, 1000)
      return () => {
        clearTimeout(timer)
      }
    } else {
      setIsClick(false)
      setCountDown(30)
    }
  }, [countDown, isClick])

  return (
    <Button onClick={handleOnConfirm} disabled = {isClick}>
      <Text>{isClick ? `${textAfterClick} (${countDown})` : textBeforeClick}</Text>
    </Button>
  )
}
export default memo(TimerConfirmButton)
