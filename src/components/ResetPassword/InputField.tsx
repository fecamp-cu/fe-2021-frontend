import styled from "styled-components"

const Input = styled.input`

  padding: 0.5em;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  border-radius: 4px;
  height: 2rem;
  width: 100%;

  ::placeholder {
    color: rgba(255,255,255,0.8);
  }
`

const InputField: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <Input placeholder={placeholder} />
}

export default InputField
//export default InputField;
