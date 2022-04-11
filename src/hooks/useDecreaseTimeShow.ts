import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useDecreaseTimeShow = ()=>{
    const [timeShow, setTimeShow] = useState<number>(5)
    const navigate = useNavigate()
  
    useEffect(() => {
      if (timeShow > 0) {
        const timer = setTimeout(() => {
          setTimeShow(prevTime => prevTime - 1)
        }, 1000)
        return () => {
          clearTimeout(timer)
        }
      } else {
        navigate("/login")
      }
    }, [timeShow, navigate])
    const handleOnClick = () => {
      navigate("/login")
    }

    return [handleOnClick,timeShow] as const;
}
