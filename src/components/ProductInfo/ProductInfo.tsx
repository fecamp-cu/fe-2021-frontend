import React, { useCallback, useRef } from "react"
import { Button } from "../Buttons/Button"
import { PDFView } from "../PDFView/PDFView"
import { IoMdBasket } from "react-icons/io"
import "./productInfo.style.css"
interface BookIndex {
  id: number
  order: number
  text: string
}
export interface ProductInfoProps {
  title: string
  author: string
  summary: string
  type: "old_papers" | "exam_preps"
  indexes: BookIndex[]
  thumbnail?: string
  fileURL?: string
  price?: number
  id: number
  quantityInStock: number
  //This is subject to change depending on how backend store data
}
export const ProductInfo: React.FC<ProductInfoProps> = ({ title, author, summary, type, indexes, thumbnail, price, fileURL }) => {
  const pdfRef = useRef<HTMLDivElement>(null)
  const scrollToPdf = useCallback(() => {
    pdfRef.current?.scrollIntoView()
  }, [])
  return (
    <>
      <div style={{ color: "var(--white-400)" }}>
        <div className="grid sm:grid-rows-6 sm:grid-flow-col gap-4 mb-8">
          <div className="product-img-container row-span-6 flex col-span-2 flex-row items-center justify-center">
            <img src={thumbnail} alt="cover"></img>
          </div>
          <div className="col-span-2 product-title flex flex-row items-center">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div className="row-span-5 col-span-2 flex flex-col justify-between">
            <div className="product-detail">
              <p>แต่งโดย: {author}</p>
              <p>เนื้อหาโดยสังเขป:</p>
              <p>{summary}</p>
            </div>
            <div className="flex flex-col items-start order-first sm:order-2">
              {type === "exam_preps" ? (
                <>
                  {/* TODO: Style buttons */}
                  <div className="flex flex-col sm:flex-row justify-around w-full mb-2">
                    <Button outline shadow={false} lineHeight="35px" className=" mb-2 sm:mb-0 sm:mr-2">
                      ดูตัวอย่างหนังสือ
                    </Button>
                    <Button bg="#781A36" outline={false} shadow={false} Icon={IoMdBasket} lineHeight="35px">
                      เพิ่มลงตะกร้า
                    </Button>
                  </div>

                  <Button bg="white" textColor="var(--crimson)" outline={false} shadow={false} lineHeight="35px" className="mb-2">
                    ซื้อ {price} บาท
                  </Button>
                </>
              ) : (
                <>
                  <Button outline shadow={false} onClick={scrollToPdf} className="mb-2 sm:mb-0">
                    ดูตัวอย่างข้อสอบ
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-lg font-bold">สารบัญ</h1>
          <ol>
            {indexes.map((bookIndex, i) => (
              <li key={`index-${i}`}>
                ส่วนที่ {i}: {bookIndex.text}
              </li>
            ))}
          </ol>
        </div>
        <div ref={pdfRef}>
          <h1 className="text-lg font-bold">ตัวอย่าง{type === "exam_preps" ? "หนังสือ" : "ข้อสอบ"}:</h1>
          <PDFView srcUrl={fileURL} />
        </div>
      </div>
    </>
  )
}
