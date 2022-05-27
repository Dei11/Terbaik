import React from "react";

function Image(props) {
  const image = "https://picsum.photos/" + props.width + "/" + props.height;
  console.log(image);
  return (
    <div>
      <img src={image} alt="image" />
    </div>
  );
}

export default Image;
