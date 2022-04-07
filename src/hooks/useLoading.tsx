import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)
  const location = useLocation()
  const [path, setPath] = useState<string>("")

  useEffect(() => {
    if (location.pathname !== path) {
      setPath(location.pathname)
      setLoading(true)
    }
  }, [location])

  return { isLoading: loading, setLoading }
}
