import { AxiosResponse } from "axios"
import { isPast } from "date-fns"
import React, { useContext, useEffect, useState } from "react"
import { apiClient } from "../client"
import { User } from "../types/common"

interface UserContextConstruct {
  isLoggedIn: boolean
  user: User
  setUser: (u: User) => void
}

export const UserContext = React.createContext({} as UserContextConstruct)

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ ...props }) => {
  const [user, setUser] = useState<User>({} as User)
  useEffect(() => {
    apiClient.getProfile().then((profile: User) => setUser(profile ?? {}))
  }, [])
  return <UserContext.Provider value={{ user, setUser, isLoggedIn: !!user.id || user.id === 0 }} {...props} />
}

export default UserProvider
