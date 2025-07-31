export default function TableCell({ children, className = "" }) {
  return (
    <td className={`px-4 py-2 border border-gray-200 text-sm ${className}`}>
      {children}
    </td>
  );
}
