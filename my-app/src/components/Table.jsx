function Table({ children }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      {children}
    </table>
  );
}

function TableHead({ children }) {
  return <thead style={{ backgroundColor: "#f2f2f2" }}>{children}</thead>;
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return (
    <tr
      style={{
        borderBottom: "1px solid #ddd",
        textAlign: "left",
      }}
    >
      {children}
    </tr>
  );
}

function TableCell({ children }) {
  return <td style={{ padding: "10px" }}>{children}</td>;
}

export { Table, TableHead, TableBody, TableRow, TableCell };

export default Table;


