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
  isLive: boolean
}

const arrayChange = ["", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]

const Item = (props: ItemProps) => {
  return (
    <ScheduleItem isLive={props.isLive}>
      <Time className="">
        {props.day} {props.month} {props.year}
      </Time>
      <Content className="">{props.con}</Content>
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
          let isInTimestampRange = true // startare timestamp vs current time
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

          if (
            isWithinInterval(new Date(currentYear, currentMonth, currentDay), {
              start: new Date(startYear, startMonth, startDay),
              end: new Date(endYear, endMonth, endDay - 1),
            })
          ) {
            isInTimestampRange = true
            return (
              <Item
                isLive={true}
                day={startDay}
                month={arrayChange[startMonth]}
                year={startYear + 543}
                con={element.text}
                key={element.id}
                highlight={isInTimestampRange}
              />
            )
          } else if (isBefore(new Date(startYear, startMonth, startDay), new Date(currentYear, currentMonth, currentDay))) {
            // ผ่านมาแล้ว 50 ปี
            isInTimestampRange = false
            return (
              <Item
                isLive={false}
                day={startDay}
                month={arrayChange[startMonth]}
                year={startYear + 543}
                con={element.text}
                key={element.id}
                highlight={isInTimestampRange}
              />
            )
          } else {
            isInTimestampRange = false
            return (
              <Item
                isLive={false}
                day={startDay}
                month={arrayChange[startMonth]}
                year={startYear + 543}
                con={element.text}
                key={element.id}
                highlight={isInTimestampRange}
              />
            )
          }
        })}
      </TimelineRoot>
    </>
  )
}
export default Schedule
