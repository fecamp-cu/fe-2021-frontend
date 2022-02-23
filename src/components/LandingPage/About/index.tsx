import { Label } from "../../../utils/style/common"
import { AboutFeContainer } from "../../../utils/types/setting"
import { ContentText, LabelRoot } from "./style"

export type AboutProps = {
  posts: AboutFeContainer[]
}

function About(props: AboutProps) {
  const items = props.posts.map((item) => {
    return item.order % 2 === 0 ? (
      <ContentText key={`item-${item.id}`} className="w-11/12 text-sm sm:w-2/3 sm:text-lg 2xl:text-2xl">
        {item.text}
      </ContentText>
    ) : (
      <Label className="text-4xl sm:text-7xl" key={`item-${item.id}`}>
        {item.text}
      </Label>
    )
  })

  return <LabelRoot className="py-10">{items}</LabelRoot>
}

export default About
