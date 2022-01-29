import '../../../../node_modules/tw-elements/dist/css/index.min.css';
import '../../../../node_modules/tw-elements/dist/js/index.min.js';

import './PhotoPreview.css'

function PhotoPreview(props : { imgUrlArray : Array<string> } ) {

  return (
  <div>
    <h1 className="topic-text2">ภาพกิจกรรม</h1>

    <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
        ></button>

      {[...Array(9)].map((e,i) => {
      return( <button key={i}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={`${i+1}`}
        aria-label={`Slide ${i+2}`}
      ></button>
      );
      })}
  </div>

    <div className="carousel-inner relative w-full overflow-hidden">
      
      {props.imgUrlArray.map((e,i) => {
        if(i === 0){
          return (
              <div key={i} className="carousel-item active float-left w-full">
                <img
                  src={e}
                  className="block w-full"
                  alt="activityImage"
                />
              </div>
          );
        }
        else{
          return( 
          <div key={i} className="carousel-item float-left w-full">
          <img
            src={e}
            className={`block w-full`}
            alt="activityImage"
          />
          </div>
          );
          }
        })
        }
    
    </div>

    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
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

export default PhotoPreview;