// src/components/ui/Table.js
import React from "react";

export function Table({ headers, rows, className = "" }) {
  return (
    <table className={`min-w-full border border-[#415a77] text-sm text-white bg-[#1b263b] ${className}`}>
      <thead className="bg-[#0d1b2a]">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="p-3 border-b border-[#415a77] text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="hover:bg-[#1e2e45] transition-colors duration-200"
          >
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-3 border-b border-[#415a77]">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
