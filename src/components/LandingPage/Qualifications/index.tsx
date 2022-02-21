import { QualificationPreview } from "../../../utils/types/setting"
import { Label } from "../../../utils/style/common"
import { QualificationContent, QualificationIndex, QualificationItem, QualificationItemRoot, QualificationRoot } from "./style"

export type QualificationProps = {
  qualifications: QualificationPreview[]
}

function Qualifications(props: QualificationProps) {
  const items = props.qualifications.sort((prev, next) => {
    return prev.order - next.order
  })

  return (
    <QualificationRoot className="">
      <Label>คุณสมบัติผู้สมัคร</Label>
      <QualificationItemRoot className="">
        {items.map((element: QualificationPreview, index) => {
          return (
            <QualificationItem key={`item-${index}`} className="">
              <QualificationIndex className="text-2xl font-bold text-red-1">{index + 1}</QualificationIndex>
              <QualificationContent className="text-lg font-medium text-white">{element.text}</QualificationContent>
            </QualificationItem>
          )
        })}
      </QualificationItemRoot>
    </QualificationRoot>
  )
}

export default Qualifications
