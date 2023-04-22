import ReactPlayer from "react-player";

function VideoPlayer(videoLink) {
    return (
        <ReactPlayer url={videoLink} width="640" height="360" controls />
    );
}

export default VideoPlayer;