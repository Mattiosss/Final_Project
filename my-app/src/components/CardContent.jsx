// src/components/CardContent.jsx

function CardContent({ children, style = {} }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        backgroundColor: "#02045cff",
        borderTop: "1px solid #eee",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default CardContent;
