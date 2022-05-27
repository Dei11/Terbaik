import React, { useState } from "react";
import Image from "../components/Image";

function Main() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const setValues = () => {};

  return (
    <div>
      <h1>Main</h1>
      {/* <form>
        <input onChange={(e) => setWidth(e.target.value)}>width</input>
        <input onChange={(e) => setHeight(e.target.value)}>height</input>
      </form> */}
      <p>by default: </p>
      <p>*width: 200px*</p>
      <p>*height: 200px*</p>

      <br />
      <br />

      <label for="width">Width: </label>
      <input
        type="text"
        id="width"
        name="fname"
        onChange={(e) => setWidth(e.target.value)}
      />
      <br />
      <br />
      <label for="height">Height: </label>
      <input
        type="text"
        id="height"
        name="height"
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <br />

      <Image width={width} height={height} />
    </div>
  );
}

export default Main;
