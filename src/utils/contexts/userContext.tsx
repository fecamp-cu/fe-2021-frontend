import { AxiosResponse } from "axios"
import { isPast } from "date-fns"
import React, { useContext, useEffect, useState } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom"
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
  const location = useLocation()
  const logout = () => {
    localStorage.clear()
    setUser({} as User)
  }
  useEffect(() => {
    const matchGoogleToken = location.hash.match(/access_token=([^&]*)/)
    const matchFacebookToken = { state: "", code: "" }
    location.search
      .slice(1)
      .split("&")
      .forEach((param) => {
        const [paramName, paramValue] = param.split("=")
        if (paramName === "state") matchFacebookToken.state = paramValue
        if (paramName === "code") matchFacebookToken.code = paramValue
      })
    if (matchGoogleToken) {
      const googleAccessToken = matchGoogleToken[0].split("=")[1]
      apiClient.googleCallback(googleAccessToken)
    } else if (matchFacebookToken.code && matchFacebookToken.state) {
      apiClient.facebookCallback(matchFacebookToken)
    }
    apiClient.getProfile().then((profile: User) => setUser(profile ?? {}))
  }, [location.hash, location.search])
  return <UserContext.Provider value={{ user, setUser, isLoggedIn: !!user.id, logout }} {...props} />
}

export default UserProvider
