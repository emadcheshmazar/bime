// Update the Input component
import React from "react";

const Input: React.FC<InputProps> = ({
  error,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap w-full justify-start relative">
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        inputMode="numeric"
        className={`min-w-[320px] w-[80%] mx-5 sm:mr-5 h-[48px] border-[1px] border-solid ${
          error ? "border-[red] " : "border-[#B4B4B4] "
        }placeholder:w-[300px] placeholder:text-right placeholder:pr-3 pr-2`}
      />
      {error && (
        <p className="text-[red] w-full text-right text-[12px] h-[18px] absolute bottom-0 mb-[-20px]">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
