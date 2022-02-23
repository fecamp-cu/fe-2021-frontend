import { getDate, getMonth, getYear } from "date-fns"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Path } from "../../../utils/enums/common.enum"
import { Customer } from "../../../utils/types/shop"
import { TransactionInfo, TransactionInfoRoot, TransactionLabel, TransactionLabelRoot, TransactionRoot } from "./style"

export type TransactionHistoryProps = {
  customer: Customer | undefined
}

const arrayChange = [
  "",
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
]

const TransactionHistory = (props: TransactionHistoryProps) => {
  let items
  let height

  if (props.customer) {
    height = 10
    items = props.customer.orders.map((order) => {
      const date = Date.parse(order.paidAt)
      const Day = getDate(date)
      const Month = getMonth(date) + 1 // need to plus one
      const Year = getYear(date)
      return order.items.map((item) => {
        return (
          <TransactionInfo key={`item-${item.id}`}>
            คุณได้สั่ง {item.item.title} เป็นจำนวน {item.quantity} เล่มเมื่อวันที่ {Day} {arrayChange[Month]} {Year + 543}
          </TransactionInfo>
        )
      })
    })
  }

  // TODO Change to Shop Path in sprint
  return (
    <TransactionRoot className="overflow-y-auto">
      <TransactionLabelRoot>
        <TransactionLabel className="font-NotoSansThai">ประวัติการสั่งซื้อ</TransactionLabel>
      </TransactionLabelRoot>
      <TransactionInfoRoot height={height}>
        {props.customer ? (
          items
        ) : (
          <div className="font-BaiJamjuree font-medium text-white">
            <div>คุณยังไม่เคยสั่งซื้อหนังสือ</div>
            <Link to={Path.SHOP} className="flex flex-row underline">
              กดสั่งซื้อตอนนี้เลย!
              <AiOutlineShoppingCart className="ml-[8px] mt-[3px]" />
            </Link>
          </div>
        )}
      </TransactionInfoRoot>
    </TransactionRoot>
  )
}

export default TransactionHistory
