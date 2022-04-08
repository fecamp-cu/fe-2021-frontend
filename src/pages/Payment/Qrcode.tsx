import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { FloatingGlassBox } from "../../components/Containers"
import { PaymentApiResponse } from "../../utils/types/shop"

export const QrcodePage = () => {
  const location = useLocation()
  const uris = location.state as PaymentApiResponse
  return (
    <FloatingGlassBox>
      <h1></h1>
    </FloatingGlassBox>
  )
}
