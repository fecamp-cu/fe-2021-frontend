import { QualificationPreview } from "../../../utils/types/setting"
import { Label } from "../../../utils/style/common"
import {
  QualificationContent,
  QualificationContentRoot,
  QualificationIndex,
  QualificationItem,
  QualificationItemRoot,
  QualificationRoot,
} from "./style"

export type QualificationProps = {
  qualifications: QualificationPreview[]
}

// TODO Fix qualification view

function Qualifications(props: QualificationProps) {
  return (
    <QualificationRoot>
      <Label>คุณสมบัติผู้สมัคร</Label>
      <QualificationItemRoot>
        {props.qualifications.map((element: QualificationPreview, index) => {
          return (
            <QualificationItem key={`item-${index}`}>
              <QualificationIndex className="text-2xl font-bold text-red-1">{index + 1}</QualificationIndex>
              <QualificationContentRoot>
                {element.text.split("\n").map((text) => {
                  return <QualificationContent className="text-lg font-medium text-white">{text}</QualificationContent>
                })}
              </QualificationContentRoot>
            </QualificationItem>
          )
        })}
      </QualificationItemRoot>
    </QualificationRoot>
  )
}

export default Qualifications
