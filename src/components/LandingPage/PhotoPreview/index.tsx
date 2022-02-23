import "../../../../node_modules/tw-elements/dist/css/index.min.css"
import "tw-elements"

import { PhotoPreviewContainer } from "../../../utils/types/setting"
import { Label } from "../../../utils/style/common"

export type PhotoPreviewProps = {
  photoes: PhotoPreviewContainer[]
}

function PhotoPreview(props: PhotoPreviewProps) {
  return (
    <div>
      <Label className="text-center font-Chulalongkorn text-4xl text-white sm:text-7xl">ภาพกิจกรรม</Label>
      <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          {[...Array(Math.max(0, props.photoes.length - 1))].map((e, i) => {
            return (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={`${i + 1}`}
                aria-label={`Slide ${i + 2}`}
              ></button>
            )
          })}
        </div>

        <div className="carousel-inner relative w-full overflow-hidden">
          {props.photoes.map((e, i) => {
            if (i === 0) {
              return (
                <div key={`item-${i}`} className="carousel-item active float-left w-full">
                  <img src={e.imgUrl} className={`block w-full`} alt="activityImage" />
                </div>
              )
            } else {
              return (
                <div key={`item-${i}`} className="carousel-item float-left w-full">
                  <img src={e.imgUrl} className={`block w-full`} alt="activityImage" />
                </div>
              )
            }
          })}
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default PhotoPreview
