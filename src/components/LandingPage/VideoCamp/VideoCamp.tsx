import "./VideoCamp.css"

function VideoCamp() {
    return (
        <div className="video-container">
            <div className="video-text">คลิปเปิดค่าย Jailbreak by FeCampX - FECamp Chula</div>
            <iframe className="video-camp" src="https://www.youtube.com/embed/0OCyTBaPiYc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default VideoCamp;