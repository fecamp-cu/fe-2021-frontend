import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

import facebookLogo from "../../assets/book_cover.jpg"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import { Button } from "../Buttons/Button"
import { CartAction, CartActionEnum } from "../../hooks/useCart"
import { Book } from "../../utils/types/shop"

const Container = styled.div`
    max-width: 454px;
    height:auto;

    background: linear-gradient(90deg, #AC3B43 0%, #D15C65 64.31%, #E56D77 98.24%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}`

const Head = styled.div`
    height: 60px;
    padding-left: 20px;
    padding-top: 18px;

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    
    color: #FFFFFF;
}`

const Footer = styled.div`
    height: 75px;
    padding-left: 20px;
    padding-top: 13px;
    
}`

const ListBackGround = styled.div.attrs({
  className: "flex justify-center items-center",
})`
    max-width: 454px;
    min-height: 100px;
    height:auto;
    padding-top: 0.1px;
    background: linear-gradient(98.4deg, rgba(226, 226, 226, 0.6) 10.21%, rgba(255, 255, 255, 0.4) 90.92%);
}
`

const CodeBg = styled.div`
    width: 454px;
    min-height: 90px;
    height:auto !important;
    background: linear-gradient(98.4deg, rgba(226, 226, 226, 0.6) 10.21%, rgba(255, 255, 255, 0.4) 90.92%);
    padding-left: 20px;
    padding-top: 30px;
    
}`

const CodeInput = styled.input`
    width: 222px;
    height: 40px;
    margin-left: 36px;
    display: inline;

    background: rgba(255, 255, 255, 0.3);
    /* white/500 */

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;

    padding-left: 10px;
    padding-top: 5px;
    
}`

const InfoText = styled.text`
    @import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap");
    font-family: Bai Jamjuree;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    /* white/500 */

    color: #FFFFFF;
}`

const ShippingCost = styled.p`

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    display: inline;

    /* white/500 */

    color: #FFFFFF;
}`

const Cost = styled.p`
    display: inline-block;

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    
    /* white/500 */
    color: #FFFFFF;
}`

const ProductImg = styled.img`
    display: inline-block;
    width: 70px;
    height: 70px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    margin-top: 30px;

}`

const Title = styled.p`
    display: inline-block;
    margin-left: 15px;
}`

const SqrBtn = styled.button.attrs({ type: "button" })`

    width: 30px;
    height: 30px;
    /* medOfRedToPink */

    background: #D15C65;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    align-item: center;
    position: absolute;
    color: #fff;
    font-size: 20px;

}`

const Logo = styled.p`
    margin-left: 5px;
}`

const Price = styled.p`

    position: absolute;
    width: 61px;
    height: 27px;

    /* TH/H6 */

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* white/500 */

    color: #FFFFFF;
}`

const Amount = styled.p`

    position: absolute;
    /* TH/H6 */

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    /* medOfRedToPink */

    color: #D15C65;
}`

const CodeBtn = styled.p`
    margin-left: 13px;
    display: inline;
}`

interface ProductListProps {
  shipping?: number
  bookList: Book[]
  price: number
  onBookChange: React.Dispatch<CartAction>
}

const ProductListV2: React.FC<ProductListProps> = ({ onBookChange, shipping, bookList, price }) => {
  const [promotion_code, setPromotionCode] = useState(" ")

  const inputCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromotionCode(event.target.value)
  }

  return (
    <Container>
      <Head>รายการสินค้า</Head>
      {bookList.map((book) => {
        return (
          <ListBackGround key={book.productId}>
            <div>
              <ProductImg src={book.productImg}></ProductImg>
              <Title>
                <InfoText>{book.title}</InfoText>
              </Title>

              <Amount style={{ marginLeft: "360px", marginTop: "-25px" }}>{book.quantity}</Amount>

              <SqrBtn
                style={{ marginLeft: "-95px", marginTop: "70px" }}
                id={book.productId.toString()}
                onClick={() => onBookChange({ type: CartActionEnum.DECREMENT, payload: book.productId })}
              >
                <Logo>
                  <AiOutlineMinus />
                </Logo>
              </SqrBtn>

              <SqrBtn
                style={{ marginLeft: "-22px", marginTop: "70px" }}
                id={book.productId.toString()}
                onClick={() => onBookChange({ type: CartActionEnum.INCREMENT, payload: book.productId })}
              >
                <Logo>
                  <AiOutlinePlus />
                </Logo>
              </SqrBtn>
              <Price style={{ marginLeft: "86px", marginTop: "-25px" }}>฿ {book.price.toFixed(2)}</Price>
            </div>
          </ListBackGround>
        )
      })}

      <CodeBg>
        <InfoText>โค้ดส่วนลด</InfoText>
        <CodeInput type="text" onChange={inputCode}></CodeInput>
        <CodeBtn>
          <Button width="71" bg="#D45161" fontSize="16px" lineHeight="24px" outline={false} shadow>
            ใช้โค้ด
          </Button>
        </CodeBtn>
      </CodeBg>

      <Footer>
        <ShippingCost>ค่าจัดส่ง</ShippingCost>
        <ShippingCost style={{ marginLeft: "330px" }}>฿ 0.00</ShippingCost>
        <Cost>ราคาสุทธิ</Cost>
        <Cost style={{ marginLeft: "297px" }}>฿ {price.toFixed(2)}</Cost>
      </Footer>
    </Container>
  )
}

export default ProductListV2
