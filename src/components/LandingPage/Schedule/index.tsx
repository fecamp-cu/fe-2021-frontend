import { getDate, getMonth, getYear, isBefore, isWithinInterval } from "date-fns"
import { Label } from "../../../utils/style/common"
import { TimelineEvent } from "../../../utils/types/setting"
import { Content, ScheduleItem, Time, TimelineRoot } from "./style"

export type ItemProps = {
  day: number
  month: string
  year: number
  con: string
  highlight: boolean
}

const arrayChange = ["", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]

const Item = (props: ItemProps) => {
  return (
    <ScheduleItem isLive={props.highlight}>
      <Time>
        {props.day} {props.month} {props.year}
      </Time>
      <Content>{props.con}</Content>
    </ScheduleItem>
  )
}

interface PropsSchedule {
  schedules: TimelineEvent[]
}

const Schedule: React.FC<PropsSchedule> = (props: PropsSchedule) => {
  return (
    <>
      <Label className="mb-5 text-center">ตารางเวลา</Label>
      <TimelineRoot>
        {props.schedules?.map((element: TimelineEvent) => {
          const data = Date.parse(element.eventStartDate)
          const enddate = Date.parse(element.eventEndDate)
          const currentTime = new Date()
          const currentDay = getDate(currentTime)
          const currentMonth = getMonth(currentTime) + 1 // need to plus one
          const currentYear = getYear(currentTime)

          const endDay = getDate(enddate)
          const endMonth = getMonth(enddate) + 1
          const endYear = getYear(enddate)

          const startDay = getDate(data)
          const startMonth = getMonth(data) + 1
          const startYear = getYear(data)

          const isInTimestampRange = isWithinInterval(new Date(currentYear, currentMonth, currentDay), {
            start: new Date(startYear, startMonth, startDay),
            end: new Date(endYear, endMonth, endDay - 1),
          })
          return (
            <Item
              day={startDay}
              month={arrayChange[startMonth]}
              year={startYear + 543}
              con={element.text}
              key={element.id}
              highlight={isInTimestampRange}
            />
          )
        })}
      </TimelineRoot>
    </>
  )
}
export default Schedule
