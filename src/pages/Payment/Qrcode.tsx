import React, { useCallback, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { FloatingGlassBox } from "../../components/Containers"
import { formatTime, useTimer } from "../../hooks/useTimer"
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
    if (!paymentState?.download_uri) {
      alert("ไม่สามารถดำเนินการ QR code ได้ กรุณาลองใหม่อีกครั้ง")
      navigate(-1)
    }
    startTimer()
  }, [paymentState?.download_uri, startTimer, navigate])
  return (
    <FloatingGlassBox>
      <div className=" flex flex-col justify-center py-8 px-4">
        <img src={paymentState?.download_uri || "https://picsum.photos/283/328"} />
        <div className="mt-5 flex flex-col items-center text-white">
          <h1 className="text-xl font-bold sm:text-3xl">ยอดเงินของรายการสั่งซื้อนี้ : {paymentState?.amount} บาท</h1>
          <p className="text-sm">กรุณาชำระเงินก่อน QR CODE หมดอายุ</p>
          <div>{formatTime(time)} นาที</div>
        </div>
      </div>
    </FloatingGlassBox>
  )
}
