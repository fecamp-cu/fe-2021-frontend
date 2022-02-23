import React, { ComponentType, FC } from "react"
import { Navigate } from "react-router"
import { useUserContext } from "../contexts/userContext"

function withUserGuard<P>(Component: ComponentType<P>): FC<P> {
  return function WithUserGuard(props: P) {
    const { isLoggedIn } = useUserContext()
    if (!isLoggedIn) {
      return <Navigate to="/login" />
    } else {
      return <Component {...props} />
    }
  }
}

export default withUserGuard
