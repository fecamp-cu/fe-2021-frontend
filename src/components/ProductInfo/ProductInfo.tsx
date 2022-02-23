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
        <div className="mb-8 grid gap-4 sm:grid-flow-col sm:grid-rows-6">
          <div className="product-img-container col-span-2 row-span-6 flex flex-row items-center justify-center">
            <img src={thumbnail} alt="cover"></img>
          </div>
          <div className="product-title col-span-2 flex flex-row items-center">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div className="col-span-2 row-span-5 flex flex-col justify-between">
            <div className="product-detail">
              <p>แต่งโดย: {author}</p>
              <p>เนื้อหาโดยสังเขป:</p>
              <p>{summary}</p>
            </div>
            <div className="order-first flex flex-col items-start sm:order-2">
              {type === "exam_preps" ? (
                <>
                  {/* TODO: Style buttons */}
                  <div className="mb-2 flex w-full flex-col justify-around sm:flex-row">
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
          {/** TODO: Remove (ดูใน browser) ใน sprint 2 */}
          <h1 className="text-lg font-bold">ตัวอย่าง{type === "exam_preps" ? "หนังสือ" : "ข้อสอบ"} (ดูใน browser ดีที่สุด): </h1>
          <PDFView srcUrl={fileURL} />
        </div>
      </div>
    </>
  )
}
