import styled from "styled-components"

export const PageContainer = styled.div`
  margin-top: 32px;
  @media only screen and (min-width: 640px) {
    margin-top: 48px;
  }
  margin-bottom: 30px;
`

export const Circle = styled.span.attrs({
  className: "flex justify-center items-center",
})<{ color: string }>`
  background-color: ${(props) => props.color || "white"};
  align-self: end;
  border-radius: 50%;
  height: 60px;
  width: 60px;
`
