import About from "../../components/LandingPage/About"
import ApplyButton from "../../components/Buttons/ApplyButton"
import Qualifications from "../../components/LandingPage/Qualifications"
import Schedule from "../../components/LandingPage/Schedule"
import Sponsor from "../../components/LandingPage/Sponsor"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Announcement from '../../components/Announcement'
import PhotoPreview from "../../components/LandingPage/PhotoPreview"
import VideoCamp from "../../components/LandingPage/VideoCamp"
import { useEffect, useState } from "react"
import { apiClient } from "../../utils/client"
import star from "../../assets/images/star.svg"
import { Setting, YouTube } from "../../utils/types/setting"
import { IoIosArrowDown } from "react-icons/io"
import { Hero, HeroContent, HeroText, Star } from "./style"
import { CgSpinner } from "react-icons/cg"
import useLoading from "../../hooks/useLoading"
import Loading from "../../components/Loading"

function LandingPage() {
  const [settings, setSettings] = useState<Setting>({
    id: 0,
    title: "",
    registerFormUrl: "",
    youtube: {} as YouTube,
    isActive: false,
    aboutFeContainers: [],
    timelineEvents: [],
    photoPreviews: [],
    qualificationPreviews: [],
    sponcerContainers: [],
    announcements : []
  })
  const { isLoading, setLoading } = useLoading()

  useEffect(() => {
    const fetchSetting = async () => {
      const settings: Setting = await apiClient.getActiveSetting()
      setSettings(settings)
      setLoading(false)
    }
    fetchSetting()
  }, [])
  console.log(settings)
  return (
    <div className="select-none" style={{ marginTop: "-70px" }}>
      {!isLoading ? (
        <div>
          <Announcement announcements = {(settings as Setting).announcements}/>
          <img src="https://storage.googleapis.com/fe-camp/setting-header.jpg" alt="Header" className="h-full w-full object-cover" />
          <Hero className="sm:h-64">
            <HeroContent className="bg-red-500/0">
              <a href={settings.registerFormUrl} target="_blank" rel="noreferrer" className="-translate-y-1/2">
                <ApplyButton />
              </a>
              <HeroText className="font-BaiJamjuree text-lg font-semibold text-red-1">รู้จักค่าย</HeroText>
              <AnchorLink href="#main-info-landing">
                <IoIosArrowDown className="h-12 w-12 animate-pulse text-red-1" />
              </AnchorLink>
            </HeroContent>
          </Hero>

          <div className="bg-landing bg-cover font-BaiJamjuree" id="main-info-landing">
            
            <About posts={(settings as Setting).aboutFeContainers} />
            <Star src={star} alt="starIcon" />
            <PhotoPreview photoes={(settings as Setting).photoPreviews} />
            <VideoCamp youtubeUrl={(settings as Setting).youtube.url} />
            <Star src={star} alt="starIcon" />
            <Schedule schedules={(settings as Setting).timelineEvents} />
            <Star src={star} alt="starIcon" />
            <Qualifications qualifications={(settings as Setting).qualificationPreviews} />
            <Star src={star} alt="starIcon" />
            <Sponsor sponsors={(settings as Setting).sponcerContainers} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default LandingPage
