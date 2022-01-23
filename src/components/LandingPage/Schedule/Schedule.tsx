import { ReactChild, ReactFragment, ReactPortal } from 'react';
import './Schedule.css'

interface ItemProps {
    day: number,
    month: string,
    year: number,
    con: string,
    highlight: boolean
}

const Item = (props: ItemProps) => {
    return  <li className={`item ${props.highlight && 'highlight-item'}`}>
            <div className='leftCol'>{props.day} {props.month} {props.year}</div> 
            <div className='rightCol'>{props.con}</div>
            </li>
}

function Schedule() {
    const currentHighlight = new Date();
    const data = [{id:1,day:24,month:"ก.พ.",year:2565,con:"เริ่มการเปิดรับสมัคร"},
                  {id:2,day:20,month:"มี.ค.",year:2565,con:"ปิดการรับสมัคร"},
                  {id:3,day:8,month:"เม.ย.",year:2565,con:"ประกาศรายชื่อผู้ที่มีสิทธิ์จ่ายเงิน"},
                  {id:4,day:8,month:"เม.ย.",year:2565,con:"ผู้มีสิทธิ์จ่ายเงินชำระค่าเข้าค่าย"},
                  {id:5,day:15,month:"เม.ย.",year:2565,con:"สิ้นสุดการจ่ายเงินชำระค่าเข้าค่าย"},
                  {id:6,day:4,month:"พ.ค.",year:2565,con:"ประกาศรายชื่อผู้มีสิทธิ์เข้าค่าย"},
                  {id:7,day:26,month:"พ.ค.",year:2565,con:"เริ่มค่าย FECamp15"},
                  {id:8,day:1,month:"มิ.ย.",year:2565,con:"สิ้นสุดค่าย FECamp15"}]

    return (
        <>
            <div className="title-text">ตารางเวลา</div>
            <ul className='tableRow'>
                { data.map((element)=>{
                    const isInTimestampRange = true // compare timestamp vs current time
                    return <Item day={element.day} month={element.month} year={element.year} con={element.con} key={element.id} highlight={isInTimestampRange}/>
                })}
            </ul>
        </>

     );
}
export default Schedule;