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
  // external/controlled pagination support
  page, // 1-based, when provided makes page controlled
  rowsPerPage, // deprecated alias — prefer `size`
  size, // preferred name for rows per page (controlled)
  totalRows, // total row count (for server-side pagination)
  onPageChange, // deprecated alias — prefer `onSetPage`
  onRowsPerPageChange, // deprecated alias — prefer `onSetSize`
  onSetPage,
  onSetSize,
  // external/controlled ordering (sorting)
  orderBy, // accessor string to indicate active ordered column
  order, // 'asc' | 'desc'
  onSetOrder, // (by: string, order: 'asc' | 'desc') => void
  pageSizeOptions = [10, 25, 50, 100],
  tableClassName = "",
  paginationClassName = "",
  parentClassName = "",
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultRowsPerPage);

  // Determine controlled vs uncontrolled values
  const isPageControlled = typeof page === "number" && page > 0;
  const isPageSizeControlled =
    (typeof size === "number" && size > 0) ||
    (typeof rowsPerPage === "number" && rowsPerPage > 0);
  const useExternalPagination =
    isPageControlled ||
    isPageSizeControlled ||
    typeof totalRows === "number" ||
    typeof onSetPage === "function" ||
    typeof onSetSize === "function" ||
    typeof onPageChange === "function" ||
    typeof onRowsPerPageChange === "function";

  const effectivePage = isPageControlled ? page : currentPage;
  const effectivePageSize = isPageSizeControlled
    ? (typeof size === "number" && size > 0 ? size : rowsPerPage)
    : pageSize;

  const defaultSortFn = (a, b) => {
    if (a === b) return 0;
    return a > b ? 1 : -1;
  };

  const handleSort = (accessor, sortFn) => {
    const isSortControlled = typeof orderBy === "string" || typeof onSetOrder === "function";
    if (isSortControlled) {
      const currentKey = typeof orderBy === "string" ? orderBy : null;
      const currentDir = order === "desc" ? "desc" : "asc";
      let nextDir = "asc";
      if (currentKey === accessor) {
        nextDir = currentDir === "asc" ? "desc" : "asc";
      }
      if (typeof onSetOrder === "function") {
        onSetOrder(accessor, nextDir);
      }
    } else {
      let direction = "asc";
      if (sortConfig.key === accessor && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key: accessor, direction });
    }
    if (useExternalPagination) {
      if (typeof onSetPage === "function") {
        onSetPage(1);
      } else if (typeof onPageChange === "function") {
        onPageChange(1);
      } else {
        setCurrentPage(1);
      }
    } else {
      setCurrentPage(1);
    }
  };

  const sortedData = useMemo(() => {
    // If sorting is controlled externally, do not sort here
    const isSortControlled = typeof orderBy === "string" || typeof onSetOrder === "function";
    if (isSortControlled) return data;
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
  }, [data, sortConfig, columns, orderBy, order, onSetOrder]);

  const totalRowCount = useMemo(
    () => (useExternalPagination ? totalRows ?? data.length : sortedData.length),
    [useExternalPagination, totalRows, data.length, sortedData]
  );

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil((totalRowCount || 0) / (effectivePageSize || 1))),
    [totalRowCount, effectivePageSize]
  );

  const paginatedData = useMemo(() => {
    if (!showPagination) return sortedData;
    if (useExternalPagination) return sortedData; // data is already paginated externally
    const start = (effectivePage - 1) * effectivePageSize;
    return sortedData.slice(start, start + effectivePageSize);
  }, [sortedData, effectivePage, effectivePageSize, showPagination, useExternalPagination]);

  const getSortIcon = (column) => {
    const isSortControlled = typeof orderBy === "string" || typeof onSetOrder === "function";
    if (isSortControlled) {
      if (orderBy === column.accessor) {
        return order === "desc" ? (
          <IconSortDescending size={16} />
        ) : (
          <IconSortAscending size={16} />
        );
      }
      return <IconArrowsSort size={16} />;
    } else {
      if (sortConfig.key === column.accessor) {
        return sortConfig.direction === "asc" ? (
          <IconSortAscending size={16} />
        ) : (
          <IconSortDescending size={16} />
        );
      }
      return <IconArrowsSort size={16} />;
    }
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
              onClick={() => {
                const prev = Math.max(effectivePage - 1, 1);
                if (useExternalPagination) {
                  if (typeof onSetPage === "function") return onSetPage(prev);
                  if (typeof onPageChange === "function") return onPageChange(prev);
                }
                setCurrentPage(prev);
              }}
              disabled={effectivePage === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() => {
                const next = Math.min(effectivePage + 1, totalPages);
                if (useExternalPagination) {
                  if (typeof onSetPage === "function") return onSetPage(next);
                  if (typeof onPageChange === "function") return onPageChange(next);
                }
                setCurrentPage(next);
              }}
              disabled={effectivePage === totalPages}
              style={{ marginLeft: 8 }}
            >
              Next
            </Button>
            <span style={{ marginLeft: 16 }}>
              Page {effectivePage} of {totalPages}
            </span>
            <span style={{ marginLeft: 16 }}>
              {(() => {
                const hasData = paginatedData.length > 0;
                const startIndex = hasData ? (effectivePage - 1) * effectivePageSize + 1 : 0;
                const endIndex = hasData ? startIndex + paginatedData.length - 1 : 0;
                return (
                  <>
                    Showing {startIndex} to {endIndex} of {totalRowCount || 0} rows
                  </>
                );
              })()}
            </span>
          </div>
          <DropdownInput
            prompt="Rows per page"
            items={pageSizeOptions.map((size) => ({ id: size, label: size }))}
            value={effectivePageSize}
            onChange={(selected) => {
              if (useExternalPagination) {
                if (typeof onSetSize === "function") return onSetSize(selected.id);
                if (typeof onRowsPerPageChange === "function")
                  return onRowsPerPageChange(selected.id);
              }
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
  // external pagination
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  size: PropTypes.number,
  totalRows: PropTypes.number,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSetPage: PropTypes.func,
  onSetSize: PropTypes.func,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  // external ordering
  orderBy: PropTypes.string,
  order: PropTypes.oneOf(["asc", "desc"]),
  onSetOrder: PropTypes.func,
};
