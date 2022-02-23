import {
  FacebookIcon,
  FacultyAddress,
  FacultyName,
  FooterContent,
  FooterContentItem,
  FooterContentSocial,
  FooterLabel,
  FooterLabelContent,
  FooterRoot,
  InstagramIcon,
  Line,
  YoutubeIcon,
} from "./style"

export type FooterProps = {
  name: string
  address: string
  facebookUrl: string
  instagramUrl: string
  youtubeUrl: string
  copyright: string
}

const Footer = (props: FooterProps) => {
  // TODO Refactor This
  return (
    <FooterRoot className="divide-[1px] select-none p-10">
      <FooterContent className="w-full flex-col gap-y-5 sm:gap-y-0 lg:flex-row">
        <FooterContentItem>
          <FacultyName>คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</FacultyName>
          <FacultyAddress>254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330</FacultyAddress>
        </FooterContentItem>
        <FooterContentSocial>
          <a href="https://th-th.facebook.com/fecampchula/" rel="noreferrer" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/fecampcu/" rel="noreferrer" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCzAKRq31Xm-lqcP4ZkI5ZSg" rel="noreferrer" target="_blank">
            <YoutubeIcon />
          </a>
        </FooterContentSocial>
      </FooterContent>
      <Line />
      <FooterLabelContent className="w-full flex-row justify-center">
        <FooterLabel className="font-bold">FE CAMP</FooterLabel>
        <FooterLabelContent className="flex-wrap items-center justify-center text-center font-BaiJamjuree text-2xs font-bold sm:text-base">
          {props.copyright}
        </FooterLabelContent>
      </FooterLabelContent>
    </FooterRoot>
  )
}

export default Footer
