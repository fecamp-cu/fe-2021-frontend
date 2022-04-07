import React from "react";
import styled from "styled-components";
// import Button from "../../components/Buttons/Buttons";
import { FaTrashRestore } from "react-icons/fa";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";


const ProductBackground = styled.div`
    width: 454px;
    min-height: 285px;
    height:auto !important;

    /* redtopink */

    background: linear-gradient(90deg, #AC3B43 0%, #D15C65 64.31%, #E56D77 98.24%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

}
`;

const ListBackGround = styled.div`
    position: absolute;
    width: 454px;
    min-height: 157px;
    height:auto !important;
    left: 0px;
    margin-top: 60px;

    background: linear-gradient(98.4deg, rgba(226, 226, 226, 0.6) 10.21%, rgba(255, 255, 255, 0.4) 90.92%);
}
`;

const ProductText = styled.p`
    position: absolute;
    width: 96px;
    height: 30px;
    margin-left: 20px;
    margin-top: 18px;

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* white/500 */

    color: #FFFFFF;

}
`;

const InfoText = styled.text`
    @import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap");
    font-family: Bai Jamjuree;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* white/500 */

    color: #FFFFFF;
}`;

const Title = styled.p`
    position: absolute;
    width: 323px;
    height: 20px;
    margin-left: 107px;
    margin-top: 13px;

}`;

const Code = styled.p`
    position: absolute;
    width: 74px;
    height: 20px;
    margin-left: 20px;
    margin-top: 115px;
}`;

const Price = styled.p`
    position: absolute;
    width: 61px;
    height: 27px;
    left: 107px;
    top: 56px;

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

const ProductImg = styled.img`
    position: absolute;
    width: 70px;
    height: 70px;
    left: 20px;
    top: 10px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));

}`;

const CodeBtn = styled.p`
    position: absolute;    
    left: 80.62%;
    right: 3.74%;
    top: 65%;
    bottom: 28.42%;
}`;

const CodeInput = styled.input`
    position: absolute;
    width: 222px;
    height: 40px;
    left: 28.85%;
    right: 22.25%;
    top: 65%;
    bottom: 28.42%;

    background: rgba(255, 255, 255, 0.3);
    /* white/500 */

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 10px;
    padding-top: 5px;
}`;

const SqrBtn = styled.button`
    
    position: absolute;
    width: 30px;
    height: 30px;
    /* medOfRedToPink */

    background: #D15C65;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    align-item: center;

}`;

const BinLogo = styled.div`
    
    width: 14px;
    height: 18px;
    margin-left: 7px;
    color: #FFF;

}`;

const PlusLogo = styled.div`
    width: 14px;
    height: 14px;
    margin-left: 5.5px;
    padding-bottom: 20px;
    color: #FFFFFF;
    font-size: 20px;
}`;

const ShippingCost = styled.p`
    position: absolute;
    width: 48px;
    height: 24px;

    font-family: CHULALONGKORN;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* white/500 */

    color: #FFFFFF;
}`;

const Cost = styled.p`
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

    /* white/500 */

    color: #FFFFFF;
}`;

const Amount = styled.p`

    position: absolute;
    margin-left: 380px;
    margin-top: 58px;


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

interface ProductListProps {
    productImg: any
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    title: string
    price: number
    shipping: number

}
const ProductList: React.FC<ProductListProps> = ({ productImg, onClick, title, price, shipping }) => {
    const [code, setCode] = useState(" ")
    const [amount, setAmount] = useState(1)
    const inputCode = (event: React.ChangeEvent<HTMLInputElement>) => {

        setCode(event.target.value)

    }

    const addAmount = (event: React.MouseEvent<HTMLButtonElement>) => {

        setAmount(amount + 1)
    }

    const reduceAmount = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
        else {
            setAmount(1)
        }

    }

    return <ProductBackground>
        <ProductText>รายการสินค้า</ProductText>
        <ListBackGround>
            <ProductImg src={productImg}></ProductImg>
            <Title><InfoText>{title}</InfoText></Title>
            <Code><InfoText>โค้ดส่วนลด</InfoText></Code>
            <Price>$ {price.toFixed(2)}</Price>
            <SqrBtn style={{ marginLeft: '336px', marginTop: '53px' }} onClick={reduceAmount}><BinLogo><FaTrashRestore></FaTrashRestore></BinLogo></SqrBtn>
            <Amount>{amount}</Amount>
            <SqrBtn style={{ marginLeft: '407px', marginTop: '53px' }} onClick={addAmount}><PlusLogo><FiPlus></FiPlus></PlusLogo></SqrBtn>
            {/* <CodeBtn><Button typeButton="codeButton" typeText="whiteSmallText" onClick={onClick} >ใช้โค้ด</Button></CodeBtn> */}
            <CodeInput type="text" onChange={inputCode}></CodeInput>
            
        </ListBackGround>
        <ShippingCost style={{ marginLeft: '20px', marginTop: '225px'}}>ค่าจัดส่ง</ShippingCost>
        <ShippingCost style={{ marginLeft: '385px', marginTop: '225px'}}>$ {shipping.toFixed(2)}</ShippingCost>
        <Cost style={{ marginLeft: '20px', marginTop: '248px'}}>ราคาสุทธิ</Cost>
        <Cost style={{ marginLeft: '385px', marginTop: '248px'}}>$ {(price*amount+shipping).toFixed(2)}</Cost>
        

    </ProductBackground>

}

export default ProductList