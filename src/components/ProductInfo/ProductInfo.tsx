import React from "react"
import "./productInfo.style.css"
export interface ProductInfoProps {
  title: string
  author: string
  summary: string
  type: "oldPapers" | "examPreps"
  index: string[]
  thumbnail: string
  file?: File
  price?: number
}
export const ProductInfo: React.FC<ProductInfoProps> = ({ title, author, summary, type, index, thumbnail, price }) => {
  return (
    <div className="flex flex-row">
      <div className="product-img-container flex flex-row justify-center mx-5 my-2">
        <img src={thumbnail} alt="cover"></img>
      </div>
      <div className=" flex flex-col justify-between ">
        <div>
          <h3>{title}</h3>
          <p>แต่งโดย: {author}</p>
          <p>เนื้อหาโดยสังเขป:</p>
          <p>{summary}</p>
        </div>
        <div className="flex flex-col items-start">
          {type === "examPreps" ? (
            <>
              <button>ดูตัวอย่างหนังสือ</button>

              <button>เพิ่มลงตะกร้า</button>

              <button>ซื้อ {price}</button>
            </>
          ) : (
            <>
              <button>ดูตัวอย่างข้อสอบ</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
