import { AxiosResponse } from "axios"
import { isPast } from "date-fns"
import React, { useContext, useEffect, useState } from "react"
import { apiClient } from "../client"
import { User } from "../types/common"

interface UserContextConstruct {
  isLoggedIn: boolean
  user: User
  setUser: (u: User) => void
  logout: () => void
}

export const UserContext = React.createContext({} as UserContextConstruct)

export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ ...props }) => {
  const [user, setUser] = useState<User>({} as User)
  const logout = () => {
    localStorage.clear()
    setUser({} as User)
  }
  useEffect(() => {
    apiClient.getProfile().then((profile: User) => setUser(profile ?? {}))
  }, [])
  return <UserContext.Provider value={{ user, setUser, isLoggedIn: !!user.id, logout }} {...props} />
}

export default UserProvider
