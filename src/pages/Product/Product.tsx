import React from "react"
import "./product.style.css"
import { ProductInfo, ProductInfoProps } from "../../components/ProductInfo/ProductInfo"
import Book from "../../assets/book_cover.jpg"
const testProps: ProductInfoProps = {
  title: "เตรียมสอบ PAT3 ความถนัดทางวิศวกรรมศาสตร์",
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit, dolorum aliquam excepturi quos eligendi doloribus omnis voluptate cumque assumenda iure ab minima, quasi, maiores quas impedit ad dolore exercitationem.",
  type: "examPreps",
  author: "Somedude WithSurname",
  thumbnail: Book,
  index: ["ปรนัยตัวเลือก 10 ข้อ", "ปรนัยตัวเลือก 5 ข้อ", "เติมคำ 5 ข้อ"],
  price: 199,
}
const Product = () => {
  return (
    <div className="container mx-auto glass-container p-2">
      <ProductInfo {...testProps} />
    </div>
  )
}

export default Product
