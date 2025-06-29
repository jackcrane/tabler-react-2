import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Button, DropdownInput } from "../index";

export const IconSortDescending = ({ size }) => (
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

export const IconSortAscending = ({ size }) => (
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

export const IconArrowsSort = ({ size }) => (
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

export const Table = ({
  columns,
  data,
  nowrap = false,
  stickyHeader = false,
  className = "",
  showPagination = false,
  defaultRowsPerPage = 10,
  tableClassName = "",
  paginationClassName = "",
  parentClassName = "",
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultRowsPerPage);

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
    setCurrentPage(1);
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    const { key, direction } = sortConfig;
    const sortColumn = columns.find((col) => col.accessor === key);
    const sortFunction = sortColumn?.sortFn || defaultSortFn;
    const order = direction === "asc" ? 1 : -1;
    return [...data].sort((a, b) => {
      const aValue = getValueByAccessor(a, key);
      const bValue = getValueByAccessor(b, key);
      return sortFunction(aValue, bValue) * order;
    });
  }, [data, sortConfig, columns]);

  const pageSizeOptions = [10, 25, 50, 100];
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(sortedData.length / pageSize)),
    [sortedData, pageSize]
  );

  const paginatedData = useMemo(() => {
    if (!showPagination) return sortedData;
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize, showPagination]);

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
    <div className={parentClassName}>
      <div
        className={`table-responsive ${
          nowrap ? "table-nowrap" : ""
        } ${className}`}
      >
        <table
          className={`table table-vcenter ${
            stickyHeader ? "sticky-top" : ""
          } ${tableClassName}`}
        >
          <thead>
            <tr>
              {columns.map((column, idx) => (
                <th
                  key={idx}
                  className={`${column.className || ""} ${
                    column.sortable ? "sortable" : ""
                  }`}
                  onClick={
                    column.sortable
                      ? () => handleSort(column.accessor, column.sortFn)
                      : undefined
                  }
                  style={{ cursor: column.sortable ? "pointer" : "default" }}
                >
                  {column.icon && (
                    <span style={{ marginRight: 8 }}>{column.icon}</span>
                  )}
                  <span style={{ marginRight: 8 }}>{column.label}</span>
                  {column.sortable && getSortIcon(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
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
      {showPagination && (
        <div
          className={`d-flex justify-content-between align-items-center mt-2 ${paginationClassName}`}
        >
          <div>
            <Button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{ marginLeft: 8 }}
            >
              Next
            </Button>
            <span style={{ marginLeft: 16 }}>
              Page {currentPage} of {totalPages}
            </span>
            <span style={{ marginLeft: 16 }}>
              Showing {(currentPage - 1) * pageSize + 1} to{" "}
              {Math.min(currentPage * pageSize, sortedData.length)} of{" "}
              {sortedData.length} rows
            </span>
          </div>
          <DropdownInput
            prompt="Rows per page"
            items={pageSizeOptions.map((size) => ({ id: size, label: size }))}
            onChange={(selected) => {
              setPageSize(selected.id);
              setCurrentPage(1);
            }}
          />
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      className: PropTypes.string,
      render: PropTypes.func,
      sortable: PropTypes.bool,
      sortFn: PropTypes.func,
      icon: PropTypes.node,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  nowrap: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  className: PropTypes.string,
  showPagination: PropTypes.bool,
  defaultRowsPerPage: PropTypes.number,
};
