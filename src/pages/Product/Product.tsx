import React from "react"
import "./product.style.css"
import { ProductInfo, ProductInfoProps } from "../../components/ProductInfo/ProductInfo"
import Book from "../../assets/book_cover.jpg"
const testProps: ProductInfoProps = {
  title: "เตรียมสอบ PAT3 ความถนัดทางวิศวกรรมศาสตร์",
  summary:
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe iure velit architecto asperiores obcaecati temporibus perspiciatis tempora quos, quae ex laudantium nam, commodi in rem fugit at magni nobis veritatis cum expedita aliquid distinctio a? Corrupti commodi mollitia blanditiis quasi officia nihil recusandae magni rerum quisquam adipisci, modi itaque dignissimos expedita! Ipsa vitae consequuntur porro earum quia vel molestias, eum dignissimos itaque nihil nostrum quo architecto iure vero molestiae cum quam minima, eligendi reprehenderit officiis nisi. Et suscipit quod incidunt soluta! Sapiente quibusdam eos architecto! Nam ipsa aliquid ut, eligendi nostrum quae non laboriosam tenetur. Maxime libero voluptatem ex",
  type: "examPreps",
  author: "Somedude WithSurname",
  thumbnail: Book,
  index: ["ปรนัยตัวเลือก 10 ข้อ", "ปรนัยตัวเลือก 5 ข้อ", "เติมคำ 5 ข้อ"],
  price: 199,
  file: "https://pdfgeneratorapi.com/example-documents/52272/pdf",
}
const Product = () => {
  return (
    <div className="container mx-auto glass-container p-4 md:pt-8">
      <ProductInfo {...testProps} />
    </div>
  )
}

export default Product
