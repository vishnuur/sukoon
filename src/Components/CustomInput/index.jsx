import React from "react";
import "./index.scss";

export default function CustomInput({
  name,
  value,
  placeHolder,
  type,
  onChange,
  extraStyle,
  largeInput,
  lines,
}) {
  return !largeInput ? (
    <input
      className={extraStyle + " custom-input"}
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeHolder}
    />
  ) : (
    <textarea
      className={extraStyle + " custom-input"}
      value={value}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeHolder}
      rows={lines}
    ></textarea>
  );
}
