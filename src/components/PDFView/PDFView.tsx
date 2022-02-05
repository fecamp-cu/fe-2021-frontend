import React from "react"
interface PDFViewProps {
  srcUrl?: string
}
export const PDFView = ({ srcUrl }: PDFViewProps) => {
  return (
    <div className="pdf-view" id="pdf-view">
      <object data={srcUrl} type="application/pdf" style={{ width: "100%", height: "800px" }}>
        <iframe title="pdf-view" src={srcUrl} style={{ width: "100%", height: "800px" }}></iframe>
      </object>
    </div>
  )
}
