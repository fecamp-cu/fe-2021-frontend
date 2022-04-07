import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
  }, [location])

  return { isLoading: loading, setLoading }
}
