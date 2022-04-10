import { ChangeEvent, useEffect, useState, memo } from "react"
import styled from "styled-components"
import { InputChecker } from "./helper/InputChecker"
import { PasswordChecker } from "./helper/PasswordChecker"
import { InputProps } from "./InputField"

const Input = styled.input<InputProps>`
  padding: 0.5em;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid ${props => props.warning? "#FFA500" : "#ffffff"};
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

const ConfirmPasswordInput: React.FC<{
  placeholder: string
  handleFormUpdate: (title: string, text: string) => void
  formTitle?: string
  inputType: string
  password: string
}> = ({ placeholder, handleFormUpdate, password,formTitle = "confirmPassword" }) => {
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
      } else if (!PasswordChecker(input, password)) {
        setWarning({ warning: true, warningText: input === password ? "รหัสผ่านต้องมีึตวามยาวอย่างน้อย 8 หลัก" : "รหัสผ่านที่ยืนยันไม่ตรงกัน" })
      } else {
        setWarning({ warning: false, warningText: "" })
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [handleFormUpdate, input, formTitle, inputProperty, password])

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
        placeholder={placeholder}
        onChange={handleInputChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        type="password"
        warning = {warning.warning}
      />
      <WarningText>{warning.warningText}</WarningText>
    </Container>
  )
}

export default memo(ConfirmPasswordInput)
//export default InputField;
