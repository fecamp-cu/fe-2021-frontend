import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import facebookLogo from "../../assets/book_cover.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Button } from "../Buttons/Button";

const Container = styled.div`
    width: 454px;
    height:auto !important;

    background: linear-gradient(90deg, #AC3B43 0%, #D15C65 64.31%, #E56D77 98.24%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}`;

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
}`;

const Footer = styled.div`
    height: 75px;
    padding-left: 20px;
    padding-top: 13px;
    
}`;

const ListBackGround = styled.div`
    width: 454px;
    min-height: 100px;
    height:auto !important;
    display: inline-block;
    padding-left: 20px;
    padding-top: 0.1px;
    background: linear-gradient(98.4deg, rgba(226, 226, 226, 0.6) 10.21%, rgba(255, 255, 255, 0.4) 90.92%);
}
`;


const CodeBg = styled.div`
    width: 454px;
    min-height: 90px;
    height:auto !important;
    background: linear-gradient(98.4deg, rgba(226, 226, 226, 0.6) 10.21%, rgba(255, 255, 255, 0.4) 90.92%);
    padding-left: 20px;
    padding-top: 30px;
    
}`;

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
    
}`;

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
}`;

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
}`;

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
}`;

const ProductImg = styled.img`
    display: inline-block;
    width: 70px;
    height: 70px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
    margin-top: 30px;

}`;

const Title = styled.p`
    display: inline-block;
    margin-left: 15px;
}`;

const SqrBtn = styled.button`

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

}`;

const Logo = styled.p`
    margin-left: 5px;
}`;

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
}`;


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
}`;

const CodeBtn = styled.p`
    margin-left: 13px;
    display: inline;
}`;

export interface Book {
    productId: number;
    title: string;
    price: number;
    productImg: any;
}

interface Basket {
    productId: number;
    quantity: number;
}
interface ProductListProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    shipping?: number
    bookList: Book[];

}

const ProductListV2: React.FC<ProductListProps> = ({onClick, shipping, bookList }) => {
    const [promotion_code, setPromotionCode] = useState(" ")
    const [quantity,setQuantity] = useState()

    const inputCode = (event: React.ChangeEvent<HTMLInputElement>) => {

        setPromotionCode(event.target.value)

    }

    const bookCart:Book[] = [];
    const basket:Basket[] = [];

    bookList?.forEach(e=>{
        bookCart.push(e);
        basket.push({productId: e.productId, quantity:1});
        console.log(e.price)
    })

    const [currentBasket,setCurrentBasket] = useState(basket)

    const addAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentBasket(
            currentBasket.map((b)=>
                b.productId.toString() === event.currentTarget.id
                ? {...b,quantity:b.quantity+1}
                :{...b}
                
            )
        );

    };

    const reduceAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentBasket(
            currentBasket.map((b)=>
                b.productId.toString() === event.currentTarget.id
                ? {...b,quantity:b.quantity>0?b.quantity-1:0}
                :{...b}
                
            )
        );

    };

    const getPrice = (basket:Basket[]) =>{
        let p = 0;
        basket.map(e => {
            bookCart.map(b=>{
                e.productId===b.productId?p = p + (e.quantity*b.price):p = p+0
            })
            
        })
        return p
    }

    return <Container>
            <Head>รายการสินค้า</Head>
                {bookCart.map(e=>{
                    return(
                        <ListBackGround>
                            <ProductImg src = {e.productImg}></ProductImg>
                            <Title><InfoText>{e.title}</InfoText> </Title>
                            {currentBasket.map((b)=>{
                                if(b.productId===e.productId){
                                    return <Amount style={{marginLeft: '360px',marginTop: '-25px'}}>{b.quantity}</Amount>
                                }
                    
                            })}
                            <SqrBtn style={{marginLeft: '-95px', marginTop: '70px'}} id={e.productId.toString()} onClick={reduceAmount}><Logo><AiOutlineMinus/></Logo></SqrBtn>
                        
                            <SqrBtn style={{marginLeft: '-22px', marginTop: '70px'}} id={e.productId.toString()} onClick={addAmount}><Logo><AiOutlinePlus/></Logo></SqrBtn>
                            <Price style ={{marginLeft: '86px', marginTop: '-25px'}}>฿ {e.price.toFixed(2)}</Price>
                            
                        </ListBackGround>
                    )
                })}

            <CodeBg>
                <InfoText>โค้ดส่วนลด</InfoText><CodeInput type="text" onChange={inputCode}></CodeInput>
                <CodeBtn><Button width="71" bg="#D45161" fontSize="16px" lineHeight="24px" outline={false} shadow>ใช้โค้ด</Button></CodeBtn>
            </CodeBg>
            

            <Footer>
                <ShippingCost>ค่าจัดส่ง</ShippingCost>
                <ShippingCost style={{marginLeft: '330px'}}>฿ 0.00</ShippingCost>
                <Cost>ราคาสุทธิ</Cost>
                <Cost style={{marginLeft: '297px'}}>฿ {getPrice(currentBasket).toFixed(2)}</Cost>
                
            </Footer>
        
        </Container>
}

export default ProductListV2