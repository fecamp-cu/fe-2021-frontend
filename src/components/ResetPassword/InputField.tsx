import { ChangeEvent, useEffect, useState, memo } from "react"
import styled from "styled-components"
import { InputChecker } from "./helper/InputChecker"

export interface InputProps {
  warning: boolean
}

const Input = styled.input<InputProps>`
  padding: 0.5em;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid ${(props) => (props.warning ? "#FFA500" : "#ffffff")};
  border-radius: 4px;
  height: 2rem;
  width: 100%;
  ::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`
const Container = styled.div`
  position: relative;
  width: 100%;
`
const WarningText = styled.div`
  position: absolute;
  color: #ffa500;
  bottom: -24px;
  font-size: 14px;
`

const InputField: React.FC<{
  placeholder: string
  handleFormUpdate: (title: string, text: string) => void
  formTitle: string
  inputType: string
}> = ({ placeholder, handleFormUpdate, formTitle, inputType }) => {
  const [input, setInput] = useState<string>("")
  const [inputProperty, setInputProperty] = useState<{ focus: boolean; everType: boolean; isEmpty: boolean }>({
    focus: false,
    everType: false,
    isEmpty: true,
  })
  const [warning, setWarning] = useState<{ warningText: string; warning: boolean }>({ warningText: "", warning: false })
  useEffect(() => {
    const timer = setTimeout(() => {
      handleFormUpdate(formTitle, input)
      if (!inputProperty.everType || inputProperty.isEmpty) {
        setWarning({ warning: false, warningText: "" })
      } else if (!InputChecker(inputType, input)) {
        if (inputType === "email") {
          setWarning({ warning: true, warningText: "โปรดป้อนอีเมลให้ถูกต้อง" })
        } else {
          setWarning({ warning: true, warningText: "รหัสผ่านต้องมีึตวามยาวอย่างน้อย 8 หลัก" })
        }
      } else {
        setWarning({ warning: false, warningText: "" })
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [handleFormUpdate, input, formTitle, inputProperty, inputType])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setInput(event.target.value)
      setInputProperty((prevInput) => ({ ...prevInput, isEmpty: false, everType: true }))
    } else {
      setInput(event.target.value)
      setInputProperty((prevInput) => ({ ...prevInput, isEmpty: true }))
    }
  }
  const handleOnFocus = () => {
    setInputProperty((prevInput) => ({ ...prevInput, focus: true }))
  }
  const handleOnBlur = () => {
    setInputProperty((prevInput) => ({ ...prevInput, focus: false }))
  }

  return (
    <Container>
      <Input
        warning={warning.warning}
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        type={inputType === "password" ? "password" : ""}
      />
      <WarningText>{warning.warningText}</WarningText>
    </Container>
  )
}

export default memo(InputField)
//export default InputField;