import React, { useCallback, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { FloatingGlassBox } from "../../components/Containers"
import { formatTime, useTimer } from "../../components/Timer/Timer"
import { PaymentApiResponse } from "../../utils/types/shop"

export const QrcodePage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const paymentState = location.state as PaymentApiResponse
  const onTimeout = useCallback(() => {
    navigate("/payment", { replace: true, state: null })
  }, [navigate])
  const { time, startTimer } = useTimer(600, onTimeout)
  useEffect(() => {
    startTimer()
  }, [startTimer])
  return (
    <FloatingGlassBox>
      <div className=" flex flex-col justify-center py-8 px-8">
        <img src={paymentState?.download_uri || "https://picsum.photos/283/328"} />
        <div className="mt-5 flex flex-col items-center text-white">
          <h1 className="text-xl font-bold sm:text-3xl">ยอดเงินของรายการสั่งซื้อนี้ : {paymentState?.amount || 5000}</h1>
          <p className="text-sm">กรุณาชำระเงินก่อน QR CODE หมดอายุ</p>
          <div>{formatTime(time)} นาที</div>
        </div>
      </div>
    </FloatingGlassBox>
  )
}
