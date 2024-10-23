import React, { useState } from "react";
import PropTypes from "prop-types";

const IconSortDescending = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6l9 0" />
    <path d="M4 12l7 0" />
    <path d="M4 18l7 0" />
    <path d="M15 15l3 3l3 -3" />
    <path d="M18 6l0 12" />
  </svg>
);

const IconSortAscending = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-sort-ascending"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6l7 0" />
    <path d="M4 12l7 0" />
    <path d="M4 18l9 0" />
    <path d="M15 9l3 -3l3 3" />
    <path d="M18 6l0 12" />
  </svg>
);

const IconArrowsSort = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-sort"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 9l4 -4l4 4m-4 -4v14" />
    <path d="M21 15l-4 4l-4 -4m4 4v-14" />
  </svg>
);

const getValueByAccessor = (object, accessor) =>
  accessor.split(".").reduce((acc, part) => acc && acc[part], object);

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
        const aValue = getValueByAccessor(a, key);
        const bValue = getValueByAccessor(b, key);
        const order = direction === "asc" ? 1 : -1;
        return sortFunction(aValue, bValue) * order;
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
                    ? column.render(
                        getValueByAccessor(row, column.accessor),
                        row
                      )
                    : getValueByAccessor(row, column.accessor)}
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
