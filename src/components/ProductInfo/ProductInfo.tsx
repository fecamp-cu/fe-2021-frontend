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
    <div className="grid grid-rows-6 md:grid-flow-col gap-4">
      <div className="product-img-container row-span-6">
        <img src={thumbnail} alt="cover"></img>
      </div>
      <div className="col-span-2 product-title flex flex-row items-center">
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="row-span-5 col-span-2 flex flex-col justify-between">
        <div className="product-detail">
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
