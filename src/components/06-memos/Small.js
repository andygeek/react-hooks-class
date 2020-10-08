import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me volvi a llamar :d");

  return (
    <small>{value}</small>
  );
});
