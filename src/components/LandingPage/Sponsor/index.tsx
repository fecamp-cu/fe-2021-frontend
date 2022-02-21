import { SponsorContainer } from "../../../utils/types/setting"

import { Label } from "../../../utils/style/common"
import { SponsorItemRoot, SponsorRoot } from "./style"

export type SponsorProps = {
  sponsors: SponsorContainer[]
}

function Sponsor(props: SponsorProps) {
  const items = props.sponsors?.map((sponsor, index) => {
    return <img src={sponsor.imgUrl} alt="sponsor" className="h-full max-h-20 w-auto sm:max-h-40" key={`item-${index}`} />
  })

  return (
    <SponsorRoot>
      <Label>ผู้สนับสนุน</Label>
      <SponsorItemRoot className="p-10">{items}</SponsorItemRoot>
    </SponsorRoot>
  )
}

export default Sponsor
