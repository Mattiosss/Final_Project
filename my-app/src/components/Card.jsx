// src/components/Card.jsx

function Card({ title, children, style = {} }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "16px 0",
        ...style,
      }}
    >
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

export default Card;
