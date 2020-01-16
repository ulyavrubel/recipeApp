import React from "react";

function VideoComponent(props) {
  if (props.loaded) {
    let vidName = props.url.slice(-11);
    return (
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + vidName}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
  return null;
}

export default VideoComponent;
