import React, { useState } from "react";

export default function Hook(props) {
  const [name] = useState("mine");

  return <h1>{name}</h1>;
}
