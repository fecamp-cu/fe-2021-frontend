import { Link } from "react-router-dom"
import { apiClient } from "../../utils/client"
import { IoExitOutline } from "react-icons/io5"
import { User } from "../../utils/types/common"
import TransactionHistory from "../../components/Profile/TransactionHistory"
import { Avatar } from "../../components/Profile/Avatar"
import {
  ProfileAvatar,
  ProfileExternalRoot,
  ProfileInfo,
  ProfileInfoContent,
  ProfileInfoContentLabel,
  ProfileInfoContentLabelRoot,
  ProfileRoot,
} from "./style"

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
        {props.user.profile?.imageUrl ? (
          <ProfileAvatar src={props.user.profile?.imageUrl} alt="Profile Avatar" />
        ) : (
          <Avatar user={props.user} className="h-20 w-20 text-4xl lg:h-[7.5rem] lg:w-[7.5rem] lg:text-7xl" />
        )}
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
