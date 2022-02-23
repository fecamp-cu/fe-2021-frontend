import styled from "styled-components"
import { device } from "../../../utils/constants/common.constant"
import { Label, Root } from "../../../utils/style/common"

export const TransactionLabelRoot = styled.div`
  width: 80%;
  text-align: left;

  @media ${device.mobileOverall} {
    width: 65%;
  }

  @media ${device.laptop} {
    width: 55%;
  }

  @media ${device.laptopL} {
    width: 45%;
  }
`

export const TransactionLabel = styled(Label)`
  font-size: 1.5rem;
  line-height: 2rem;

  @media ${device.mobileOverall} {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }

  @media ${device.laptop} {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }

  @media ${device.laptopL} {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`

export const TransactionRoot = styled(Root)`
  row-gap: 0.5rem;
`

export type TransactionInfoRootProps = {
  height: number
}

export const TransactionInfoRoot = styled.div.attrs((props: TransactionInfoRootProps) => ({
  height: props.height,
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  height: ${(props) => props.height + "rem" || "7rem"};
  max-height: 18.75rem;
  width: 90%;
  border-radius: 1rem;
  border-color: white;
  border-width: 2px;
  background-color: rgba(255, 255, 255, 0.4);

  @media ${device.mobileOverall} {
    width: 65%;
  }

  @media ${device.laptop} {
    width: 55%;
  }

  @media ${device.laptopL} {
    width: 45%;
  }
`

export const TransactionInfo = styled.div`
  color: white;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`
