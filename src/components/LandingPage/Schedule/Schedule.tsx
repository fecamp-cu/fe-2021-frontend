import './Schedule.css'
import {  getDate, getMonth, getYear, isBefore, isWithinInterval } from 'date-fns'

interface ItemProps {
    day: number,
    month: any,
    year: number,
    con: string,
    highlight: boolean
    className:any
}

const arrayChange = ["","ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]

const Item = (props: ItemProps) => {
    return  <li className={`item ${props.className}`}>
            <div className='leftCol'>{props.day} {props.month} {props.year}</div> 
            <div className='rightCol'>{props.con}</div>
            </li>
}

interface PropsSchedule {
    arraySchedule: {
        text: string;
        eventStartDate: string;
        eventEndDate: string;
        id: number;
    }[]
}

const Schedule: React.FC<PropsSchedule> = ({ arraySchedule }) => {

    return (
        <>
            <div className="title-text">ตารางเวลา</div>
            <ul className='tableRow'>
                { arraySchedule?.map((element :{ text: string; eventStartDate: string; eventEndDate: string; id: number; })=>{
                    const data = Date.parse(element.eventStartDate) 
                    const enddate = Date.parse(element.eventEndDate)
                    let isInTimestampRange = true // startare timestamp vs current time
                    const currentTime = new Date()
                    const currentDay = getDate(currentTime)
                    const currentMonth = getMonth(currentTime)+1 // need to plus one
                    const currentYear = getYear(currentTime)

                    const endDay = getDate(enddate)
                    const endMonth = getMonth(enddate)+1 
                    const endYear = getYear(enddate)

                    const startDay = getDate(data)
                    const startMonth = getMonth(data)+1
                    const startYear = getYear(data)
                    

                    if(isWithinInterval( new Date(currentYear,currentMonth ,currentDay), {start:new Date(startYear,startMonth,startDay), end:new Date(endYear,endMonth,endDay-1) } )) {
                        isInTimestampRange = true
                        return <Item className="highlight-item" day={startDay} month={arrayChange[startMonth]} year={startYear+543} con={element.text} key={element.id} highlight={isInTimestampRange}/>
                    }
                    else if(isBefore(new Date(startYear,startMonth ,startDay),  new Date(currentYear,currentMonth ,currentDay))) {
                        // ผ่านมาแล้ว 50 ปี
                        isInTimestampRange = false
                        return <Item className="before" day={startDay} month={arrayChange[startMonth]} year={startYear+543} con={element.text} key={element.id} highlight={isInTimestampRange}/> 
                    } 
                    else {
                        isInTimestampRange = false
                        return <Item className="after" day={startDay} month={arrayChange[startMonth]} year={startYear+543} con={element.text} key={element.id} highlight={isInTimestampRange}/>
                    }
                    
                    
                })}
            </ul>
        </>

     );
}
export default Schedule;
