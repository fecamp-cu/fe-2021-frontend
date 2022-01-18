import { ReactChild, ReactFragment, ReactPortal } from 'react';
import './Schedule.css'


const Item = (props: { day: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; month: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; year: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; con: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    return  <li className='item'>
            <div className='leftCol'>{props.day} {props.month} {props.year}</div> 
            <div className='rightCol'>{props.con}</div>
            </li>
}

function Schedule() {
    const data = [{id:1,day:14,month:"ม.ค.",year:2565,con:"เริ่มการเปิดรับสมัคร"},
                  {id:2,day:15,month:"ม.ค.",year:2565,con:"ปิดการรับสมัคร"},
                  {id:3,day:16,month:"ม.ค.",year:2565,con:"จบกิจกรรม"} ]

    return (
        <>
            <div className="title-text">ตารางเวลา</div>
            <ul className='tableRow'>
                { data.map((element)=>{
                    return <Item day={element.day} month={element.month} year={element.year} con={element.con} key={element.id}/>
                })}
            </ul>
        </>

     );
}
export default Schedule;