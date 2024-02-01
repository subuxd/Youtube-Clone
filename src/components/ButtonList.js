import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="JavaScript" />
      <Button name="Computer programming" />
      <Button name="Game shows" />
      <Button name="Recruitment" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Sales" />
      <Button name="Smartphones" />
      <Button name="Stocks" />
    </div>
  );
};

export default ButtonList;
