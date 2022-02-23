import React, { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { apiClient, storeToken } from "../client"
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
  const location = useLocation()
  const logout = async () => {
    await apiClient.logout()
    localStorage.clear()
    setUser({} as User)
  }
  const getCredentialsFromOAuth = () => {
    if (location.search) {
      const matchToken = location.search.match(/accessToken=([^&]*)/)
      const matchRefreshToken = location.search.match(/refreshToken=([^&]*)/)
      const matchExpiresIn = location.search.match(/expiresIn=([^&]*)/)
      if (matchToken && matchRefreshToken && matchExpiresIn) {
        return { accessToken: matchToken[1], refreshToken: matchRefreshToken[1], expiresIn: parseInt(matchExpiresIn[1]) }
      }
    }
    return null
  }
  const credentials = getCredentialsFromOAuth()
  if (credentials) storeToken(credentials)
  useEffect(() => {
    apiClient.getProfile().then((profile: User) => setUser(profile ?? {}))
  }, [])
  return <UserContext.Provider value={{ user, setUser, isLoggedIn: !!user.id, logout }} {...props} />
}

export default UserProvider
