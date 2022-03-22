import React from "react";
import styled from "styled-components";
import { useState } from "react";
import facebookLogo from "../../assets/book_cover.jpg";

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
    height: 68px;
    padding-left: 20px;
    padding-top: 8px;
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

}`;

export interface Book {
    productId: number;
    title: string;
    price: number;
    productImg: any;
}

interface Basket{
    productId: number;
    quantity: number;
}

interface ProductListProps {
    productImg?: any
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    title?: string
    price?: number
    shipping?: number
    bookList: Book[];

}

const ProductListV2: React.FC<ProductListProps> = ({ productImg, onClick, title, price, shipping,bookList }) => {
    const [promotion_code, setPromotionCode] = useState(" ")

    const inputCode = (event: React.ChangeEvent<HTMLInputElement>) => {

        setPromotionCode(event.target.value)

    }

    const bookCart:Book[] = [];

    bookList?.forEach(e=>{
        bookCart.push(e);
    })

    return <Container>
            <Head>รายการสินค้า</Head>
                {bookCart.map(e=>{
                    return(
                        <ListBackGround>
                            <ProductImg src = {e.productImg}></ProductImg>
                            <Title><InfoText>{e.title}</InfoText> </Title>
                            <SqrBtn style={{left: '336px', marginTop: '70px'}}></SqrBtn>
                            <SqrBtn style={{left: '407px', marginTop: '70px'}}></SqrBtn>
                        </ListBackGround>
                    )
                })}

            <CodeBg><InfoText>โค้ดส่วนลด</InfoText><CodeInput type="text" onChange={inputCode}></CodeInput></CodeBg>
            

            <Footer>
                <ShippingCost>ค่าจัดส่ง</ShippingCost>
                <ShippingCost style={{marginLeft: '330px'}}>฿ 0.00</ShippingCost>
                <Cost>ราคาสุทธิ</Cost>
            </Footer>
        
        </Container>
}

export default ProductListV2