// src/components/Button.jsx

function Button({ label = "Enter", onClick, type = "button", style = {} }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        ...style, // allow custom override
      }}
    >
      {label}
    </button>
  );
}

// ✅ default export for use like: `import { Button } from './ui'`
export default Button;
