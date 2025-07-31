// src/components/ui/button.js
export default function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
