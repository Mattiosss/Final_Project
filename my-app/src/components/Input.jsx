// src/components/Input.jsx

function Input({ value, onChange, placeholder = "Enter text", type = "text", style = {} }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}

export default Input;
