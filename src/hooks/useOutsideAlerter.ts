import React, { useEffect, useCallback } from "react"

export const useOutsideAlerter = (ref: React.MutableRefObject<any>, handleClickOutside: () => void) => {
  const onClickOutside = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside()
      }
    },
    [handleClickOutside, ref]
  )
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside)
    return () => {
      document.removeEventListener("mousedown", onClickOutside)
    }
  }, [ref, onClickOutside])
}
