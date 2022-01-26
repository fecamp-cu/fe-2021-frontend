import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { landingPageInstance } from '../../../utils/client';
import './Schedule.css'
import {  getDate, getMonth, getYear, isBefore, isSameDay } from 'date-fns'

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

function Schedule() {

    const [title, setTitle] = useState("");
    const [arraySchedule, setArraySchedule] = useState([]); 
  
    useEffect(() => {
      landingPageInstance.getSchedule().then((res) => {
        setTitle(res?.data.title)
        setArraySchedule(res?.data.timelineEvents)
      })
    })

    return (
        <>
            <div className="title-text">{title}</div>
            <ul className='tableRow'>
                { arraySchedule?.map((element :{ text: string , eventDate:string, id:number })=>{
                    const data = Date.parse(element.eventDate) 
                    let isInTimestampRange = true // compare timestamp vs current time
                    const currentTime = new Date()
                    const currentDay = getDate(currentTime)
                    const currentMonth = getMonth(currentTime)+1  // need to plus one
                    const currentYear = getYear(currentTime)

                    const compDay = getDate(data)
                    const compMonth = getMonth(data)+1
                    const compYear = getYear(data)
                    

                    if(isSameDay(new Date(compYear,compMonth ,compDay),  new Date(currentYear,currentMonth ,currentDay))) {
                        isInTimestampRange = true
                        return <Item className="highlight-item" day={compDay} month={arrayChange[compMonth]} year={compYear+543} con={element.text} key={element.id} highlight={isInTimestampRange}/>
                    }
                    else if(isBefore(new Date(compYear,compMonth ,compDay),  new Date(currentYear,currentMonth ,currentDay))) {
                        // ผ่านมาแล้ว 50 ปี
                        isInTimestampRange = false
                        return <Item className="before" day={compDay} month={arrayChange[compMonth]} year={compYear+543} con={element.text} key={element.id} highlight={isInTimestampRange}/> 
                    } 
                    else {
                        isInTimestampRange = false
                        return <Item className="after" day={compDay} month={arrayChange[compMonth]} year={compYear+543} con={element.text} key={element.id} highlight={isInTimestampRange}/>
                    }
                    
                    
                })}
            </ul>
        </>

     );
}
export default Schedule;
