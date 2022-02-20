import About from "../../components/LandingPage/About"
import ApplyButton from "../../components/Buttons/ApplyButton"
import Qualifications from "../../components/LandingPage/Qualifications"
import Schedule from "../../components/LandingPage/Schedule"
import Sponsor from "../../components/LandingPage/Sponsor"
import AnchorLink from "react-anchor-link-smooth-scroll"

import PhotoPreview from "../../components/LandingPage/PhotoPreview"
import VideoCamp from "../../components/LandingPage/VideoCamp"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { apiClient } from "../../utils/client"
import star from "../../assets/images/star.svg"
import { Setting } from "../../utils/types/setting"
import { IoIosArrowDown } from "react-icons/io"
import { Hero, HeroContent, HeroText, Star } from "./style"

function LandingPage() {
  const [settings, setSettings] = useState<Setting>({
    id: 0,
    title: "",
    registerFormUrl: "",
    youtubeUrl: "",
    isActive: false,
    aboutFeContainers: [],
    timelineEvents: [],
    photoPreviews: [],
    qualificationPreviews: [],
    sponcerContainers: [],
  })

  useEffect(() => {
    const fetchSetting = async () => {
      const settings: Setting = await apiClient.getActiveSetting()
      setSettings(settings)
    }
    fetchSetting()
  }, [])

  return (
    <div className="select-none">
      <img src="https://storage.googleapis.com/fe-camp/setting-header.jpg" alt="Header" className="h-full w-full object-cover" />
      <Hero className="sm:h-64">
        <HeroContent className="bg-red-500/0">
          <Link to={settings.registerFormUrl} className="-translate-y-1/2">
            <ApplyButton />
          </Link>
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
        <VideoCamp youtubeUrl={(settings as Setting).youtubeUrl} />
        <Star src={star} alt="starIcon" />
        <Schedule schedules={(settings as Setting).timelineEvents} />
        <Star src={star} alt="starIcon" />
        <Qualifications qualifications={(settings as Setting).qualificationPreviews} />
        <Star src={star} alt="starIcon" />
        <Sponsor sponsors={(settings as Setting).sponcerContainers} />
      </div>
    </div>
  )
}

export default LandingPage
