import { Link } from "react-router-dom"
import { apiClient } from "../../utils/client"
import { HiOutlinePencil } from "react-icons/hi"
import { IoExitOutline } from "react-icons/io5"
import { User } from "../../utils/types/common"
import styled from "styled-components"
import { Root } from "../../utils/style/common"
import { device } from "../../utils/constants/common.constant"
import TransactionHistory from "../../components/Profile/TransactionHistory"
import { Path } from "../../utils/enums/common.enum"

const ProfileRoot = styled(Root)`
  padding-top: 3.5rem;
  row-gap: 1.5rem;

  @media ${device.laptop} {
    padding-top: 4.7rem;
    row-gap: 2.58rem;
  }
`

const ProfileAvatar = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  text-align: center;
  border-radius: 9999px;

  @media ${device.laptop} {
    height: 7.5rem;
    width: 7.5rem;
  }
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  column-gap: 1rem;

  @media ${device.laptop} {
    column-gap: 2.5rem;
  }
`

const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 6rem;
  border-radius: 0.75rem;
  border-width: 2px;
  border-color: white;
  background-color: rgba(255, 255, 255, 0.4);
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${device.mobileOverall} {
    height: 7rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 50%;
  }

  @media ${device.laptop} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 40%;
  }

  @media ${device.laptopL} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 30%;
  }
`

const ProfileInfoContentLabelRoot = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfileInfoContentLabel = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #fff;

  @media ${device.mobileM} {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`

const ProfileExternalRoot = styled.div`
  text-align: center;
  width: 85%;

  @media ${device.mobileOverall} {
    width: 65%;
  }

  @media ${device.laptop} {
    width: 55%;
  }

  @media ${device.laptopL} {
    width: 45%;
  }
`

export type ProfileProps = {
  user: User
  setUser: (user: User) => void
}

function ProfileShow(props: ProfileProps) {
  const handleLogout = () => {
    apiClient.getLogout()
  }

  return (
    <ProfileRoot>
      <h1 className="my-5 text-center font-NotoSansThai text-3xl font-bold text-white">โปรไฟล์ของฉัน</h1>

      <ProfileInfo>
        <ProfileAvatar src={props.user.profile?.imageUrl} alt="Profile Avatar" />
        <ProfileInfoContent>
          <ProfileInfoContentLabelRoot className="flex flex-col">
            <ProfileInfoContentLabel className="font-bold">
              {props.user.profile?.firstName} {props.user.profile?.lastName}
            </ProfileInfoContentLabel>
            <ProfileInfoContentLabel className="font-medium">{props.user.email}</ProfileInfoContentLabel>
          </ProfileInfoContentLabelRoot>
          {/* <Link to={Path.PROFILE_EDIT}>
            <HiOutlinePencil className="h-5 w-5 text-white sm:mx-0 lg:h-7 lg:w-7 mobile-m:mx-5" />
          </Link> */}
        </ProfileInfoContent>
      </ProfileInfo>

      <TransactionHistory customer={props.user.customer} />
      <ProfileExternalRoot>
        <Link to="">
          <div className="flex font-medium text-white sm:text-2xl">นโยบายความเป็นส่วนตัว</div>
        </Link>

        <Link to="/" onClick={handleLogout}>
          <div className="flex font-medium text-white sm:text-2xl">
            ออกจากระบบ
            <IoExitOutline className="ml-[8px] mt-[10px]" />
          </div>
        </Link>
      </ProfileExternalRoot>
    </ProfileRoot>
  )
}

export default ProfileShow
