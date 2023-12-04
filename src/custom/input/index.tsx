import React, { ChangeEvent, InputHTMLAttributes } from "react";
import inputStyles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number" | "range";
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: string | number;
  placeholder?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: string;
}
const Input = (props: InputProps) => {
  const { label, value, onChange, type, min, max, step, ...inputProp } = props;
  const trackFillPercentage = (Number(value) / Number(max)) * 100;
  const rangeSliderStyle = {
    background: `linear-gradient(to right, #3498db 0%, #3498db ${trackFillPercentage}%, #8a8a8a62 ${trackFillPercentage}%, #8a8a8a62 100%)`,
  };
  console.log(props, "props");
  return (
    <div className={inputStyles.inputWrapper}>
      <label className={inputStyles.labelDiv}>{label}</label>
      {type === "range" ? (
        <div className={inputStyles.range}>
          <input
            type={type}
            className={inputStyles.rangeSlider}
            min={min}
            max={max}
            step={step}
            value={value}
            style={rangeSliderStyle}
            onChange={onChange}
            {...inputProp}
          />
        </div>
      ) : (
        <input
          type={type}
          value={value}
          className={inputStyles.inputDiv}
          onChange={onChange}
          {...inputProp}
        />
      )}
    </div>
  );
};

export default Input;
