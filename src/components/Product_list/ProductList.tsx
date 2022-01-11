import React from "react";
import styled from "styled-components";


const ProductBackground = styled.div`
    position: absolute;
    width: 454px;
    height: 285px;

    /* redtopink */

    background: linear-gradient(90deg, #AC3B43 0%, #D15C65 64.31%, #E56D77 98.24%);
    border-radius: 5px;

}
`;

const ListBackGround = styled.div`
    position: absolute;
    width: 454px;
    height: 157px;
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

interface ProductListProps {
    productImg: any


}

const ProductList: React.FC<ProductListProps> = ({ productImg }) => {

    return <ProductBackground>
        <ProductText>รายการสินค้า</ProductText>
        <ListBackGround>
            <ProductImg src={productImg}></ProductImg>
            <Title><InfoText>เตรียมสอบ PAT3 ความถนัดทางวิศวกรรมศาสตร์</InfoText></Title>
            <Code><InfoText>โค้ดส่วนลด</InfoText></Code>
        </ListBackGround>

    </ProductBackground>

}

export default ProductList