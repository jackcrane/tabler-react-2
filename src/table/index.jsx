import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  IconArrowsSort,
  IconSortAscending,
  IconSortDescending,
} from "@tabler/icons-react";

export const Table = ({ columns, data, nowrap, stickyHeader }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const defaultSortFn = (a, b) => {
    if (a === b) return 0;
    return a > b ? 1 : -1;
  };

  const handleSort = (accessor, sortFn) => {
    let direction = "asc";
    if (sortConfig.key === accessor && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: accessor, direction });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig.key) {
      const { key, direction } = sortConfig;
      const sortColumn = columns.find((col) => col.accessor === key);
      const sortFunction = sortColumn.sortFn || defaultSortFn;

      return [...data].sort((a, b) => {
        const order = direction === "asc" ? 1 : -1;
        return sortFunction(a[key], b[key]) * order;
      });
    }
    return data;
  }, [data, sortConfig, columns]);

  const getSortIcon = (column) => {
    if (sortConfig.key === column.accessor) {
      return sortConfig.direction === "asc" ? (
        <IconSortAscending size={16} />
      ) : (
        <IconSortDescending size={16} />
      );
    }
    return <IconArrowsSort size={16} />;
  };

  return (
    <div className={`table-responsive ${nowrap ? "table-nowrap" : ""}`}>
      <table
        className={`table table-vcenter ${stickyHeader ? "sticky-top" : ""}`}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`${column.className || ""} ${
                  column.sortable ? "sortable" : ""
                }`}
                onClick={
                  column.sortable
                    ? () => handleSort(column.accessor, column.sortFn)
                    : undefined
                }
                style={{
                  cursor: column.sortable ? "pointer" : "default",
                }}
              >
                <span style={{ marginRight: "8px" }}>{column.label}</span>
                {column.sortable && getSortIcon(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={column.className || ""}>
                  {column.render
                    ? column.render(row[column.accessor], row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      className: PropTypes.string, // Optional: For adding specific CSS classes
      render: PropTypes.func, // Optional: Custom render function for the cell content
      sortable: PropTypes.bool, // Optional: Determines if the column is sortable
      sortFn: PropTypes.func, // Optional: Custom sorting function
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nowrap: PropTypes.bool,
  stickyHeader: PropTypes.bool,
};
