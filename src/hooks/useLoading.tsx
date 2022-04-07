import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    console.log("Location changed")
  }, [location])

  return { isLoading: loading, setLoading }
}
