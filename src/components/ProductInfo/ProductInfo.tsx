import React from "react"
import { PDFView } from "../PDFView/PDFView"
import "./productInfo.style.css"
export interface ProductInfoProps {
  title: string
  author: string
  summary: string
  type: "oldPapers" | "examPreps"
  index: string[]
  thumbnail: string
  file?: string
  price?: number
  //This is subject to change depending on how backend store data
}
export const ProductInfo: React.FC<ProductInfoProps> = ({ title, author, summary, type, index, thumbnail, price, file }) => {
  return (
    <div>
      <div className="grid sm:grid-rows-6 sm:grid-flow-col gap-4 mb-5">
        <div className="product-img-container row-span-6 flex col-span-2 flex-row items-center justify-center">
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
          <div className="flex flex-col items-start order-first sm:order-2">
            {type === "examPreps" ? (
              <>
                {/* TODO: Style buttons */}
                <button>ดูตัวอย่างหนังสือ</button>

                <button>เพิ่มลงตะกร้า</button>

                <button>ซื้อ {price} บาท</button>
              </>
            ) : (
              <>
                <button>ดูตัวอย่างข้อสอบ</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-lg">สารบัญ</h1>
        <ol>
          {index.map((text, i) => (
            <li key={`index-${i}`}>
              ส่วนที่ {i}: {text}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h1 className="text-lg">ตัวอย่างหนังสือ:</h1>
        <PDFView srcUrl={file} />
      </div>
    </div>
  )
}
