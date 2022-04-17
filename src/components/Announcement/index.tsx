import { getDate, getDay, getMonth } from 'date-fns'
import { Announcement } from '../../utils/types/setting'
import { 
    AnnouncementContainer,
    AnnouncementBox,
    Header,
    Description,
    Duration
} from './style'
type AnnouncementProp = {
    announcements : Announcement[]
}

const arrayChange = ["", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]

function Announcements(prop : AnnouncementProp){
    return (
        <div id="announcementControls" className = "carousel slide relative"  data-bs-ride = "carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#announcementControls"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                {[...Array(Math.max(0, prop.announcements.length - 1))].map((e, i) => {
                    return (
                    <button
                        key={i}
                        type="button"
                        data-bs-target="#announcementControls"
                        data-bs-slide-to={`${i + 1}`}
                        aria-label={`Slide ${i + 2}`}
                    ></button>
                    )
                })}
            </div>
            <AnnouncementContainer>
                <div className ="carousel-inner relative overflow-hidden w-full">
                    {prop.announcements.map((news : Announcement, i : number) => {
                        const startDate = Date.parse(news.dateStart)
                        const endDate = Date.parse(news.dateEnd)
                        
                        const dayStart = getDate(startDate)
                        const monthStart = getMonth(startDate)+1

                        const dayEnd = getDate(endDate)
                        const monthEnd = getMonth(endDate)+1
                        if( i === 0){
                            return (
                                <div key={`item-${i}`} className = "carousel-item active float-left w-full">
                                    <AnnouncementBox>
                                        <Header>{news.header}</Header>
                                        <Description>{news.description}</Description>
                                        <Duration>{dayStart} {arrayChange[monthStart]} - {dayEnd} {arrayChange[monthEnd]} เท่านั้น</Duration>
                                    </AnnouncementBox>
                                </div>
                            )
                        }else{
                            return (
                                <div key={`item-${i}`} className = "carousel-item float-left w-full">
                                    <AnnouncementBox>
                                        <Header>{news.header}</Header>
                                        <Description>{news.description}</Description>
                                        <Duration>{dayStart} {arrayChange[monthStart]} - {dayEnd} {arrayChange[monthEnd]} เท่านั้น</Duration>
                                    </AnnouncementBox>
                                </div>
                            )
                        }
                    })}
                </div>
            </AnnouncementContainer>
            <button
                className ="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#announcementControls"
                data-bs-slide="prev"
            >
                <span className ="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className ="visually-hidden">Previous</span>
            </button>
            <button
                    className ="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#announcementControls"
                    data-bs-slide="next"
                >
                    <span className ="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className ="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Announcements