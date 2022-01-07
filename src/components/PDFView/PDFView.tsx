import React from "react"
interface PDFViewProps {
  srcUrl?: string
}
export const PDFView = ({ srcUrl }: PDFViewProps) => {
  return (
    <div>
      <object data={srcUrl} type="application/pdf" width="100%" height="800px">
        <iframe title="pdf-view" src={srcUrl} width="100%" height="800px"></iframe>
      </object>
    </div>
  )
}
