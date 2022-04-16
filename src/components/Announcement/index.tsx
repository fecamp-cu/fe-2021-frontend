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
        <AnnouncementContainer>
            {prop.announcements.map((news : Announcement) => {
                const startDate = Date.parse(news.dateStart)
                const endDate = Date.parse(news.dateEnd)
                
                const dayStart = getDate(startDate)
                const monthStart = getMonth(startDate)+1

                const dayEnd = getDate(endDate)
                const monthEnd = getMonth(endDate)+1

                return (
                <AnnouncementBox >
                    <Header>{news.header}</Header>
                    <Description>{news.description}</Description>
                    <Duration>{dayStart} {arrayChange[monthStart]} - {dayEnd} {arrayChange[monthEnd]} เท่านั้น</Duration>
                </AnnouncementBox>
            )})}
        </AnnouncementContainer>
    )
}

export default Announcements