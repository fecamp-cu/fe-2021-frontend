import styled from "styled-components"
import { getYouTubeEmbedFormat } from "../../../utils/function/formatter"
import { Root } from "../../../utils/style/common"

export type VideoCampProps = {
  youtubeUrl: string
}

const VideoRoot = styled(Root)``

const VideoTitle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fff;
  width: 100%;
`

function VideoCamp(props: VideoCampProps) {
  return (
    <VideoRoot>
      <VideoTitle className="my-12 text-lg font-bold">คลิปเปิดค่าย Jailbreak by FeCampX - FECamp Chula</VideoTitle>
      <iframe
        className="h-80 w-full max-w-[62.5rem] sm:h-[37.5rem]"
        src={props.youtubeUrl ? getYouTubeEmbedFormat(props.youtubeUrl) : ""}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </VideoRoot>
  )
}

export default VideoCamp
