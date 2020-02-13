import React from "react";

function VideoComponent(props) {
  if (props.loaded) {
    let vidName = props.url.slice(-11);
    return (
      <iframe
        width="560"
        height="315"
        title={vidName}
        src={"https://www.youtube.com/embed/" + vidName}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
  return null;
}

export default VideoComponent;
