import styled from "styled-components"
import { User } from "../../../utils/types/common"

const AvatarRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 9999px;
  background-color: rgb(188 70 70);
  text-align: center;
`

export type AvatarProps = {
  user: User
  className: string
}

export const Avatar = (props: AvatarProps) => {
  if (!props.user.email) {
    props.user.email = "FE CAMP"
  }

  return (
    <AvatarRoot className={"flex flex-col justify-center rounded-full bg-red-1 text-center font-BaiJamjuree font-bold text-white " + props.className}>
      {props.user.email.at(0)}
    </AvatarRoot>
  )
}
