// TableV2.jsx
// TanStack Table v8 styled like the Original component's Tabler look.
// Adds `dense` mode for a compact layout.
// Controlled (server-side) pagination & sorting. ES modules, named exports, arrow functions only.

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

/** Small utilities */

export const SortIcon = ({ state }) => {
  if (state === "asc") return <span aria-label="sorted ascending">▲</span>;
  if (state === "desc") return <span aria-label="sorted descending">▼</span>;
  return (
    <span className="text-muted" aria-hidden>
      ↕
    </span>
  );
};

export const RangeText = ({ page, size, total, dense }) => {
  const start = total === 0 ? 0 : (page - 1) * size + 1;
  const end = Math.min(page * size, total);
  return (
    <span className={dense ? "ms-2 small text-muted" : "ms-3 text-muted"}>
      {start.toLocaleString()}–{end.toLocaleString()} of{" "}
      {total.toLocaleString()}
    </span>
  );
};

export const PageSizeSelect = ({
  value,
  onChange,
  options = [10, 25, 50, 100],
  dense,
}) => (
  <select
    className={dense ? "form-select form-select-sm" : "form-select"}
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
    aria-label="Rows per page"
    style={{ width: dense ? 90 : 110 }}
  >
    {options.map((n) => (
      <option key={n} value={n}>
        {n} / page
      </option>
    ))}
  </select>
);

export const Pager = ({
  page,
  size,
  total,
  onPageChange,
  disabled,
  className = "",
  dense,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / Math.max(1, size)));
  const canPrev = page > 1 && !disabled;
  const canNext = page < totalPages && !disabled;

  const go = (p) => {
    const clamped = Math.min(Math.max(1, p), totalPages);
    if (clamped !== page) onPageChange(clamped);
  };

  return (
    <div
      className={`d-inline-flex align-items-center ${
        dense ? "gap-2" : ""
      } ${className}`}
    >
      <button
        className={`btn ${dense ? "btn-sm" : "btn-sm"} ${
          dense ? "px-2 py-1" : ""
        }`}
        onClick={() => go(Math.max(1, page - 1))}
        disabled={!canPrev}
      >
        Previous
      </button>
      <button
        className={`btn ${dense ? "btn-sm ms-1" : "btn-sm ms-2"} ${
          dense ? "px-2 py-1" : ""
        }`}
        onClick={() => go(Math.min(totalPages, page + 1))}
        disabled={!canNext}
      >
        Next
      </button>
      <span className={dense ? "ms-2 small text-muted" : "ms-3 text-muted"}>
        Page {page} of {totalPages}
      </span>
    </div>
  );
};

/** Helper: render a cell with a null/empty fallback */
const isEmptyRender = (node) => {
  if (node === null || node === undefined) return true;
  if (typeof node === "string" && node.trim() === "") return true;
  return false;
};

const renderCellWithFallback = (cell) => {
  // If the column provided a custom cell renderer, use it first.
  const rendered = flexRender(cell.column.columnDef.cell, cell.getContext());

  // If the renderer returned something empty-ish, or if there's no renderer,
  // fall back to the raw value.
  const finalNode = isEmptyRender(rendered) ? cell.getValue?.() : rendered;

  // If the final node is still null/undefined/empty string, show a placeholder.
  if (
    finalNode === null ||
    finalNode === undefined ||
    (typeof finalNode === "string" && finalNode.trim() === "")
  ) {
    return <span className="text-muted">—</span>;
  }

  return finalNode;
};

/** Main table */

export const TableV2 = ({
  // data/columns
  columns,
  data,
  totalRows,
  // controlled pagination (1-based)
  page,
  size,
  onPageChange,
  onSizeChange,
  // controlled sorting [{id, desc}]
  sorting,
  onSortingChange,
  // ids & selection (optional)
  getRowId,
  rowSelection,
  onRowSelectionChange,
  // visuals (matching Original component’s classes/layout)
  nowrap = false,
  stickyHeader = false,
  className = "",
  tableClassName = "",
  paginationClassName = "",
  parentClassName = "",
  dense = false, // <<< supports compact rows
  // misc
  emptyState = "No data",
  loading = false,
  showPagination = true,
  pageSizeOptions = [10, 25, 50, 100],

  fallbackText = "—",
}) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      rowSelection: rowSelection ?? {},
    },
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    enableSortingRemoval: false,
    onSortingChange,
    getRowId,
    onRowSelectionChange,
    // Note: renderFallbackValue triggers only when a renderer returns `undefined`.
    // We still handle null/"" ourselves in renderCellWithFallback.
    renderFallbackValue: <span className="text-muted">{fallbackText}</span>,
  });

  const headerCell = ({ header }) => {
    const canSort = header.column.getCanSort();
    const sortState = header.column.getIsSorted();
    const handleSort = () => {
      if (!canSort) return;
      const id = header.column.id;
      const next =
        sortState === "asc"
          ? [{ id, desc: true }]
          : sortState === "desc"
          ? []
          : [{ id, desc: false }];
      onSortingChange(next);
    };

    const thClass = [
      header.column.columnDef.className || "",
      canSort ? "sortable" : "",
      dense ? "py-1" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <th
        key={header.id}
        className={thClass}
        onClick={canSort && !loading ? handleSort : undefined}
        style={{ cursor: canSort && !loading ? "pointer" : "default" }}
        aria-sort={
          sortState === "asc"
            ? "ascending"
            : sortState === "desc"
            ? "descending"
            : "none"
        }
      >
        <span style={{ marginRight: 8 }}>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </span>
        {canSort && <SortIcon state={sortState || false} />}
      </th>
    );
  };

  const content = useMemo(() => {
    if (!loading && data.length === 0) {
      return (
        <tr>
          <td
            colSpan={table.getAllLeafColumns().length}
            className={`text-center ${
              dense ? "py-3 small" : "py-3"
            } text-muted`}
          >
            {typeof emptyState === "function" ? emptyState() : emptyState}
          </td>
        </tr>
      );
    }
    return table.getRowModel().rows.map((row) => (
      <tr
        key={row.id}
        className={[
          row.getIsSelected() ? "table-active" : "",
          dense ? "align-middle" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {row.getVisibleCells().map((cell) => (
          <td
            key={cell.id}
            className={[
              cell.column.columnDef.className || "",
              dense ? "py-1" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {renderCellWithFallback(cell)}
          </td>
        ))}
      </tr>
    ));
  }, [data, loading, emptyState, table, dense]);

  const total = totalRows ?? 0;

  return (
    <div className={parentClassName}>
      <div
        className={`table-responsive ${
          nowrap ? "table-nowrap" : ""
        } ${className}`}
      >
        <table
          className={[
            "table table-vcenter",
            stickyHeader ? "sticky-top" : "",
            dense ? "table-sm" : "",
            tableClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h) => headerCell({ header: h }))}
              </tr>
            ))}
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td
                  colSpan={table.getAllLeafColumns().length}
                  className={`text-center ${dense ? "py-2" : "py-3"}`}
                >
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden
                  />
                  <span className={dense ? "small text-muted" : "text-muted"}>
                    Loading…
                  </span>
                </td>
              </tr>
            )}
            {content}
          </tbody>
        </table>
      </div>

      {showPagination && (
        <div
          className={`d-flex justify-content-between align-items-center ${
            dense ? "mt-1" : "mt-2"
          } ${paginationClassName}`}
        >
          <div className={`d-flex align-items-center ${dense ? "gap-2" : ""}`}>
            <Pager
              page={page}
              size={size}
              total={total}
              onPageChange={onPageChange}
              disabled={loading}
              dense={dense}
            />
            <RangeText page={page} size={size} total={total} dense={dense} />
          </div>
          <PageSizeSelect
            value={size}
            onChange={(n) => {
              onSizeChange?.(n);
            }}
            options={pageSizeOptions}
            dense={dense}
          />
        </div>
      )}
    </div>
  );
};

/** PropTypes */

SortIcon.propTypes = {
  state: PropTypes.oneOf(["asc", "desc", false]),
};

RangeText.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  dense: PropTypes.bool,
};

PageSizeSelect.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
  dense: PropTypes.bool,
};

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  dense: PropTypes.bool,
};

TableV2.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  totalRows: PropTypes.number.isRequired,

  page: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onSizeChange: PropTypes.func.isRequired,

  sorting: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, desc: PropTypes.bool })
  ).isRequired,
  onSortingChange: PropTypes.func.isRequired,

  getRowId: PropTypes.func,
  rowSelection: PropTypes.object,
  onRowSelectionChange: PropTypes.func,

  nowrap: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  className: PropTypes.string,
  tableClassName: PropTypes.string,
  paginationClassName: PropTypes.string,
  parentClassName: PropTypes.string,

  emptyState: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loading: PropTypes.bool,
  showPagination: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

  dense: PropTypes.bool,
};

/** Usage (server-side)
 *
 * <TableV2
 *   dense // compact mode
 *   columns={columns}
 *   data={data}
 *   totalRows={total}
 *   page={page}
 *   size={size}
 *   onPageChange={setPage}
 *   onSizeChange={(n)=>{ setPage(1); setSize(n); }}
 *   sorting={sorting}
 *   onSortingChange={(next)=>{ setPage(1); setSorting(next); }}
 *   loading={loading}
 *   nowrap
 *   stickyHeader
 * />
 */
